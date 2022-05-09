//TODOS: refine search, auth, hide download archive when not loggedin, refine regions
import Head from "next/head";
import styles from "styles/Home.module.scss";
import React from "react";
import { useState, useEffect, useContext } from "react";

import { getBatches } from "actions/batch";
import { getResultsByBatch } from "actions/result";
import { getFile } from "actions/media";

import AuthRoute from "layouts/AuthRoute";

//search
import {
  MatchText,
  SearchProvider,
  SearchContext,
  SearchEventContext,
} from "react-ctrl-f";

export function Home() {
  const [batches, setBatches] = useState([]);
  const [batchSelection, setBatchSelection] = useState("");

  const [srcLoading, setSrcLoading] = useState(false);
  const [html, setHtml] = useState("");

  const [results, setResults] = useState([]);

  const [searchFilter, setSearchFilter] = useState("");
  useEffect(() => {
    getBatches().then((data) => {
      setBatches(data);
      if (data.length > 0) {
        setBatchSelection(data[0]._id);
      }
    });
  }, []);

  useEffect(() => {
    if (batchSelection) getResults(batchSelection);
  }, [batchSelection]);

  const getResults = (batchId) => {
    getResultsByBatch(batchId).then((data) => {
      setResults(data);
      if (data.length > 0) {
        setSrcLoading(true);
        getFile({ key: data[0].file?.key, bucket: data[0].file?.bucket }).then(
          (data) => {
            setHtml(data.data);
            setSrcLoading(false);
          }
        );
      }
    });
  };

  const listBatches = () => {
    return batches.map((batch, key) => {
      return (
        <option key={key} value={batch._id}>
          {key == 0 ? `${batch.time} (LATEST)` : batch.time}
        </option>
      );
    });
  };

  const listRegions = () => {
    return results.map((result, key) => {
      return (
        <option
          key={key}
          value={JSON.stringify({
            key: result.file?.key,
            bucket: result.file?.bucket,
          })}
        >
          {result.region}
        </option>
      );
    });
  };

  const showRegions = () => {
    return results.map((result, key) => {
      return (
        <li
          key={key}
          onClick={() =>
            handleSrc({
              key: result.file?.key,
              bucket: result.file?.bucket,
            })
          }
        >
          {result.region}
        </li>
      );
    });
  };

  const handleSrc = ({ key, bucket }) => {
    setSrcLoading(true);
    getFile({ key: key, bucket: bucket }).then((data) => {
      setHtml(data.data);
      setSrcLoading(false);
    });
  };

  const handleSrcSelection = (data) => {
    setSrcLoading(true);
    const parsed = JSON.parse(data);
    getFile({ key: parsed.key, bucket: parsed.bucket }).then((data) => {
      setHtml(data.data);
      setSrcLoading(false);
    });
  };

  const handleBatchSelection = (batch) => {
    setBatchSelection(batch);
  };

  const handleSearch = () => {
    const result = window.find(searchFilter);
    if (!result) {
      alert("Search keyword not found / Reached End of search");
    }
    console.log(result);
  };

  return (
    // <SearchProvider>
    <div className={styles.container}>
      <Head>
        <title>MBC DESISYON 2022</title>
        <meta
          name="description"
          content="DZRH News Desisyon 2022 election coverage. Online portal for updated results from the Parish Pastoral Council for Responsible Voting (PPCRV) quick count for the 2022 Philippine General Elections."
        />
        <meta
          name="keywords"
          content="Philippines, 2022 May election results, 2022 President results, 2022 Vice president results, 2022 Senate results, 2022 Philippines LGU election results"
        />
      </Head>
      <div className={styles.headerContainer}>
        <div className={styles.logoWrapper}>
          <img src="/MBCDESISYON LOGO.png" className={styles.logoImg}></img>
        </div>
        <div className={styles.title}>Partial Unofficial Results</div>
        <div className={styles.locationContainer}>
          <label>Region: </label>
          <select
            className={styles.selectWrapper}
            onChange={(e) => {
              handleSrcSelection(e.target.value);
            }}
          >
            {listRegions()}
          </select>
        </div>
      </div>

      <div className={styles.searchboxContainer}>
        <input
          className="form-control"
          type="text"
          onChange={(e) => {
            setSearchFilter(e.target.value);
          }}
          placeholder="Position, Name of candidate, City, Province..."
        />
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      {batches.length < 1 ? (
        <p className={styles.loadingDisplay}>No available data yet</p>
      ) : (
        ""
      )}
      {srcLoading ? (
        <p className={styles.loadingDisplay}>Loading...</p>
      ) : (
        <div
          className={styles.frameContainer}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </div>
    // </SearchProvider>
  );
}

export default Home;
