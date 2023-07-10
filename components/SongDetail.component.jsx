import { useDeferredValue } from "react";

import styles from "../styles/Home.module.css";

//import { Button } from "react-bootstrap";

export default function SongDetail({ filteredSongList, handleClickToCopy }) {
  const deferredFilteredSongList = useDeferredValue(filteredSongList);

  return filteredSongList.length !== 0 ? (
    deferredFilteredSongList.map((song) => (
      <tr
        className={
          song.song_name[0]=="×"
            ? styles.songRowCopyrighted
            : song.properties.includes("付费")
            ? styles.songRowPaid
            : song.new
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
        <td className={styles.tableIconTdRemoveBg}>
          {song.new == 1 ? (
            <img
              src="new_icon.png"
              alt="新曲置顶"
              className={styles.tableIcons}
              title="置顶新曲"
              style={{marginLeft: "0.5rem"}}
            ></img>
          ) : (
            <div></div>
          )}
          {song.properties.includes("付费") ? (
            <img
              src="100sc.png"
              alt="付费"
              className={styles.tableIcons}
              title="付费曲目(100SC点唱)"
              style={{marginLeft: "0.5rem"}}
            ></img>
          ) : (
            <div></div>
          )}
          {song.song_name[0]=="×" ? (
            <img
              src="copyright_lock.png"
              alt="版权限制"
              className={styles.tableIcons}
              title="版权限制，点唱受限"
              style={{marginLeft: "0.5rem"}}
            ></img>
          ) : (
            <div></div>
          )}
        </td>
        <td
          className={styles.noWrapForceRemoveBg}
          style={{fontWeight: "bold"}}
          id={
            song.properties.includes("付费") ? `paid ${song.index}` : song.index
          }
        >
          {song.song_name}
        </td>
        <td className={styles.noWrapForceRemoveBg}>{song.artist}</td>
        <td className={styles.noWrapForceRemoveBg}>{song.properties}</td>
        <td className={styles.noWrapForceRemoveBg}>{song.remarks}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td className={styles.noWrapForceRemoveBg + " display-6 text-center"} colSpan="6" id="noSongInList">
        歌单里没有诶~隐藏歌单碰碰运气!
      </td>
    </tr>
  );
}
