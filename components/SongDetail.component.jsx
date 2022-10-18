import { useDeferredValue } from "react";

import styles from "../styles/Home.module.css";

//import { Button } from "react-bootstrap";

export default function SongDetail({
  filteredSongList,
  handleClickToCopy,
}) {
  const deferredFilteredSongList = useDeferredValue(filteredSongList);

  return filteredSongList.length !== 0 ? (
    deferredFilteredSongList.map((song) => (
      <tr
        className={
          song.properties.includes("付费")
            ? styles.songRowPaid
            : song.sticky_top
            ? styles.songRowTop
            : styles.songRow
        }
        key={song.index}
        onClick={(e) => {
          handleClickToCopy(
            e.target.parentNode.firstChild.nodeName === "TD"
              ? e.target.parentNode.childNodes[1]
              : e.target.parentNode.parentNode.childNodes[1]
          );
        }}
      >
        <td className={styles.tableIconTd}>
          {/** song.sticky_top == 1 ? (
            <img
              src="up_arrow.png"
              alt="置顶"
              className={styles.tableIcons}
              title="置顶曲目"
            ></img>
          ) : (
            <div></div>
          ) */}
          {song.properties.includes("付费") ? (
            <img
              src="100sc.png"
              alt="付费"
              className={styles.tableIcons}
              title="付费曲目(100SC点唱)"
            ></img>
          ) : (
            <div></div>
          )}
        </td>
        <td
          className={styles.noWrapForce}
          id={song.properties.includes("付费") ? `paid ${song.index}` : song.index}
        >
          {song.song_name}
        </td>
        <td className={styles.noWrapForce}>{song.artist}</td>
        <td className={styles.noWrapForce}>{song.properties}</td>
        <td className={styles.noWrapForce}>{song.remarks}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td className="display-6 text-center" colSpan="6" id="noSongInList">
        歌单里没有诶~隐藏歌单碰碰运气!
      </td>
    </tr>
  );
}
