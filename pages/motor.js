import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import React from "react";

export default function Motor() {
  const [post, setPost] = React.useState(null);
  var moment = require("moment");
  React.useEffect(() => {
    axios
      .get(`https://iot-express.herokuapp.com`)
      .then((data) => {
        const dataList = data.data;
        setPost(dataList);
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }, []);
  let no = 0;
  if (!post) return null;
  console.log(post);
  return (
    <div className={styles.container}>
      <Head>
        <title>Test JS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
          crossOrigin="anonymous"
        />
      </Head>

      <main className={styles.main}>
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Device</th>
              <th scope="col">Relay1</th>
              <th scope="col">Relay2</th>
              <th scope="col">Relay3</th>
              <th scope="col">Relay4</th>
            </tr>
          </thead>
          {post.map((data) => {
            return (
              <tbody key={data.id}>
                <tr key={data.id}>
                  <td key={data.id}>
                    {moment(data.subscribeDate).format(
                      "MMMM Do YYYY, h:mm:ss:SSS"
                    )}
                  </td>
                  <td key={data.id}>{data.name}</td>
                  <td key={data.id}>{data.device}</td>
                  <td key={data.id}>{data.relay1}</td>
                  <td key={data.id}>{data.relay2}</td>
                  <td key={data.id}>{data.relay3}</td>
                  <td key={data.id}>{data.relay4}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
