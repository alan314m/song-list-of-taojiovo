import React, { useState, useEffect } from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import "react-toastify/dist/ReactToastify.css";

import {
  Container,
  Row,
  Col,
  Form,
  Table,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";

import MusicList from "../public/music_list_taoji.json";

import SongDetail from "../components/SongDetail.component";
import ChevronSVG from "../components/ChevronSVG.component";

import imageLoader from "../utils/ImageLoader";

export default function Home() {
  //状态保存: 类别选择, 搜索框, 回到顶部按钮, 移动端自我介绍, 试听窗口
  const [categorySelection, setCategotySelection] = useState({
    properties: "",
  });
  const [searchBox, setSearchBox] = useState("");
  const [showToTopButton, setToTopShowButton] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    //检测窗口滚动
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        setToTopShowButton(true);
      } else {
        setToTopShowButton(false);
      }
    });
  }, []);

  console.log("花末老师对不起！");

  //根据首字母和搜索框进行过滤
  const filteredSongList = MusicList.filter(
    (song) =>
      //搜索框搜歌名
      (song.song_name
        ?.toString()
        .toLowerCase()
        .includes(searchBox ? searchBox.toLowerCase() : "") ||
        //搜索框搜曲风
        song.properties
          ?.toString()
          .toLowerCase()
          .includes(searchBox ? searchBox.toLowerCase() : "") ||
        //搜索框搜备注
        song.remarks
          ?.toString()
          .toLowerCase()
          .includes(searchBox ? searchBox.toLowerCase() : "") ||
        //搜索框搜歌手
        song.artist
          ?.toString()
          .toLowerCase()
          .includes(searchBox ? searchBox.toLowerCase() : "")) &&
      //曲风过滤按钮
      (categorySelection.properties != ""
        ? song.properties?.includes(categorySelection.properties)
        : true)
  );

  //处理用户复制行为
  const handleClickToCopy = (song) => {
    //复制到剪贴板并发送Toast
    if (song.id.includes("paid")) {
      //付费曲目
      copy("点歌 " + song.innerText);
      // navigator.clipboard.writeText("点歌 " + songName); //如支持iOS则可替换
      //复制成功反馈
      toast.success(
        `付费曲目"` +
          song.innerText +
          `"成功复制到剪贴板!记得发100的SC或者水晶球哦~`
      );
    } else if (song.innerText[0] == "×") {
      //点唱受限反馈
      toast.info("版权限制，点唱受限");
    } else {
      //免费曲目
      copy("点歌 " + song.innerText);
      // navigator.clipboard.writeText("点歌 " + songName); //如支持iOS则可替换
      toast.success(`"` + song.innerText + `"成功复制到剪贴板!`);
    }
  };

  //改变曲风过滤状态
  const setPropertiesState = (properties) => {
    setCategotySelection({ properties: properties });
  };

  //随便听听
  const handleRandomSong = () => {
    //定位歌单
    let parentSelector = document.querySelector(".songList");
    //随机生成序号
    let random = Math.floor(
      1 + Math.random() * parentSelector.childElementCount
    );
    let songName_ = document.querySelector(
      ".songList>tr:nth-child(" + random + ")"
    ).childNodes[1];
    if (!songName_) {
      toast.info("歌单已经没歌了!");
    } else if (songName_.innerText[0] == "×") {
      //如版权限制
      toast.info("随到了“" + songName_.innerText + "”，版权限制，点唱受限");
    } else if (songName_.id.includes("paid")) {
      //如付费曲目
      copy("点歌 " + songName_.innerText);
      toast.success(
        `付费曲目"` +
          songName_.innerText +
          `"成功复制到剪贴板!记得发100的SC或者水晶球哦~`
      );
    } else {
      //如免费曲目
      copy("点歌 " + songName_.innerText);
      toast.success(`"` + songName_.innerText + `"成功复制到剪贴板!`);
    }
  };

  //移动端自我介绍off canvas开关
  const handleCloseIntro = () => setShowIntro(false);
  const handleShowIntro = () => setShowIntro(true);

  //滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.outerContainer}>
      <Link href="https://live.bilibili.com/22642754" passHref>
        <a target="_blank" style={{ textDecoration: "none", color: "#332D6A" }}>
          <div className={styles.goToLiveDiv}>
            <div className={styles.cornerToggle}>
              <Image
                loader={imageLoader}
                src="bilibili_logo_padded.png"
                alt="Bilibili"
                width={50}
                height={50}
              />
              <b>
                <i>去直播间</i>
              </b>
            </div>
          </div>
        </a>
      </Link>
      <div className={styles.offCanvasToggleDiv} onClick={handleShowIntro}>
        <div className={styles.cornerToggle} style={{ color: "#332D6A" }}>
          <Image
            loader={imageLoader}
            src="tiny_taojiovo.webp"
            alt="打开自我介绍"
            width={50}
            height={50}
          />
          <b>
            <i>自我介绍</i>
          </b>
        </div>
      </div>
      <Container>
        <Head>
          <title>桃几OvO的歌单</title>
          <meta
            name="keywords"
            content="桃几OvO,B站,bilibili,哔哩哔哩,电台唱见,歌单"
          />
          <meta name="description" content="桃几OvO的歌单" />

          <meta name="theme-color" content="#332D6A" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="apple-mobile-web-app-title" content="桃几OvO的歌单" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="msapplication-config" content="/a2hs/browserconfig.xml" />
          <meta name="msapplication-tap-highlight" content="no" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            sizes="48x48"
            href="/favicon.ico"
          />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/a2hs/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/a2hs/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/a2hs/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/a2hs/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/a2hs/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/a2hs/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/a2hs/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/a2hs/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/a2hs/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/a2hs/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/a2hs/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/a2hs/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/a2hs/favicon-16x16.png"
          />
          <link rel="manifest" href="/a2hs/manifest.json" />
          <meta name="msapplication-TileColor" content="#DFD1E3" />
          <meta
            name="msapplication-TileImage"
            content="/a2hs/ms-icon-144x144.png"
          />

          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            href="splash_screens/12.9__iPad_Pro_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            href="splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            href="splash_screens/10.9__iPad_Air_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            href="splash_screens/10.5__iPad_Air_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            href="splash_screens/10.2__iPad_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            href="splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            href="splash_screens/iPhone_14_Pro_Max_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            href="splash_screens/iPhone_14_Pro_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            href="splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            href="splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            href="splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            href="splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            href="splash_screens/iPhone_11__iPhone_XR_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
            href="splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            href="splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
            href="splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            href="splash_screens/12.9__iPad_Pro_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            href="splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            href="splash_screens/10.9__iPad_Air_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            href="splash_screens/10.5__iPad_Air_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            href="splash_screens/10.2__iPad_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            href="splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            href="splash_screens/iPhone_14_Pro_Max_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            href="splash_screens/iPhone_14_Pro_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            href="splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            href="splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            href="splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            href="splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            href="splash_screens/iPhone_11__iPhone_XR_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
            href="splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            href="splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png"
          />
          <link
            rel="apple-touch-startup-image"
            media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
            href="splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png"
          />
        </Head>

        <section className={styles.mainContent}>
          {/** 头像和标题 */}
          <Row>
            <Col className={styles.titleCol}>
              <div className={"pt-3 " + styles.titleBox}>
                <Image
                  loader={imageLoader}
                  className={styles.avatar}
                  src="taojiovo.webp"
                  alt="桃几OvO的头像"
                  width={250}
                  height={250}
                />
                <h1
                  className={"display-6 text-center pt-3 " + styles.grandTitle}
                >
                  <b>桃几OvO</b>
                  <br />
                  <b>和她会略略略的{filteredSongList.length}首歌</b>
                </h1>
                <p className="text-center py-3 mb-xl-5 text-muted">
                  轻点歌名可以复制哦
                </p>
              </div>
              <div className={styles.introBox}>
                <div className={styles.introBoxInnerDiv}>
                  <div className={styles.introTitle}>
                    <h5>桃几的自我介绍</h5>
                    <div className="d-flex">
                      <Link
                        href="https://www.tapechat.net/uu/taojiovo/8JIDAX1U"
                        passHref
                      >
                        <a target="_blank">
                          <Button
                            className={styles.customRandomButton}
                            style={{
                              marginTop: 0,
                              border: "2px solid rgba(248, 203, 225, 0.6)",
                            }}
                          >
                            <img
                              className={styles.biliIcon}
                              src="/tapechat.png"
                              alt="提问箱贴图"
                            />{" "}
                            匿名提问箱 <ChevronSVG />
                          </Button>
                        </a>
                      </Link>
                    </div>
                  </div>
                  {/** 
                                  <p className={styles.introParagraph}>
                    一个非正统V~套皮歌势~无情播放器~黑听人永远的快乐老家
                    是猫猫人！是雨刮器！不是狐狸！更不是狗！
                    稀有掉落：杂谈、游戏、录歌、看视频(通称划水)
                    不是音乐生！不是日语专业！不是广东人！
                    观众老爷们开心最重要！
                  </p>
                */}
                  <p className={styles.introParagraph}>
                    ☆一个雨刮器形状的音乐播放软件
                    <br />
                    ☆全职电台主播，不是v，介意的朋友关注请慎重
                    <br />
                    {/** 每天8-12 15-18 21-0三档准时运行，10min内不算迟到！迟到一次会抽100块舰长红包！ */}
                    ☆如果到时间没播请看动态，没发请假动态就是有意外情况迟到了～耐心等待一会儿即可
                    <br />
                    ☆曲风涉猎比较广泛，各种类型都收录了一些。
                    <br />
                    ☆目前收录的语种包括国粤日英，今年准备进军韩国市场（粤语需要看注音，其他语种都会读会写）
                    <br />
                    ☆嗓子受得了，如果不舒服会自己调整休息。大家不用担心～
                    <br />
                    ☆没有系统的学习过唱歌，所以最近找了老师开始学了
                    <br />
                    ☆直播内容99%唱歌+1%杂谈。平时说的一半是瞎扯，听个乐子即可～千万别当真！
                    <br />
                    ☆老阴阳人，讲话不好听，是故意的，但也是开玩笑的，心理承受能力较差的朋友请回避正面交流
                    <br />
                    ☆最喜欢（给我打米的）大家了！
                    <br />
                    ☆希望我唱的歌能让你快乐～
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          {/** 过滤器控件 */}
          <Row>
            <Col>
              <div className={styles.categorySelectionContainer}>
                <h5 className={styles.categorySelectionTitle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                    style={{ verticalAlign: "baseline" }}
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>{" "}
                  挑个想听的类别呗~
                </h5>
                <Container fluid>
                  <Row>
                    <Col xs={4} md={2}>
                      <div className="d-grid">
                        <Button
                          className={
                            categorySelection.properties == ""
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => setPropertiesState("")}
                        >
                          全部
                        </Button>
                      </div>
                    </Col>
                    <Col xs={4} md={2}>
                      <div className="d-grid">
                        <Button
                          className={
                            categorySelection.properties == "国语"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => setPropertiesState("国语")}
                        >
                          国语
                        </Button>
                      </div>
                    </Col>
                    <Col xs={4} md={2}>
                      <div className="d-grid">
                        <Button
                          className={
                            categorySelection.properties == "日语"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => setPropertiesState("日语")}
                        >
                          日语
                        </Button>
                      </div>
                    </Col>
                    <Col xs={4} md={2}>
                      <div className="d-grid">
                        <Button
                          className={
                            categorySelection.properties == "英语"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => setPropertiesState("英语")}
                        >
                          英语
                        </Button>
                      </div>
                    </Col>
                    <Col xs={4} md={2}>
                      <div className="d-grid">
                        <Button
                          className={
                            categorySelection.properties == "粤语"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => setPropertiesState("粤语")}
                        >
                          粤语
                        </Button>
                      </div>
                    </Col>
                    <Col xs={4} md={2}>
                      <div className="d-grid">
                        <Button
                          className={
                            categorySelection.properties == "韩语"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => setPropertiesState("韩语")}
                        >
                          韩语
                        </Button>
                      </div>
                    </Col>
                    <Col xs={4} md={2}>
                      <div className="d-grid">
                        <Button
                          className={
                            categorySelection.properties == "土嗨"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => setPropertiesState("土嗨")}
                        >
                          土嗨
                        </Button>
                      </div>
                    </Col>
                    <Col xs={4} md={2}>
                      <div className="d-grid">
                        <Button
                          className={
                            categorySelection.properties == "ACG"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => setPropertiesState("ACG")}
                        >
                          ACG
                        </Button>
                      </div>
                    </Col>
                    <Col xs={4} md={2}>
                      <div className="d-grid">
                        <Button
                          className={
                            categorySelection.properties == "古风"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => setPropertiesState("古风")}
                        >
                          古风
                        </Button>
                      </div>
                    </Col>
                    <Col xs={4} md={2}>
                      <div className="d-grid">
                        <Button
                          className={
                            categorySelection.properties == "流行"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => setPropertiesState("流行")}
                        >
                          流行
                        </Button>
                      </div>
                    </Col>
                    <Col xs={4} md={2}>
                      <div className="d-grid">
                        <Button
                          className={
                            categorySelection.properties == "民谣"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => setPropertiesState("民谣")}
                        >
                          民谣
                        </Button>
                      </div>
                    </Col>
                    <Col xs={4} md={2}>
                      <div className="d-grid">
                        <Button
                          className={
                            categorySelection.properties == "付费"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => setPropertiesState("付费")}
                        >
                          付费
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={9}>
              <Form.Control
                className={styles.filters}
                type="search"
                aria-label="搜索"
                placeholder="搜索"
                onChange={(e) => setSearchBox(e.target.value)}
              />
            </Col>
            <Col xs={12} md={3}>
              <div className="d-grid">
                <Button
                  title="从下面的歌单里随机挑一首"
                  className={styles.customRandomButton}
                  onClick={handleRandomSong}
                >
                  随便听听
                </Button>
              </div>
            </Col>
          </Row>
          {/** 歌单表格 */}
          <Row>
            <Col>
              <div className={styles.songListMarco}>
                <Container fluid style={{ padding: 0 }}>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th className={styles.tableIconTdRemoveBg}></th>
                        <th className={styles.noWrapForceRemoveBg}>歌名</th>
                        <th className={styles.noWrapForceRemoveBg}>歌手</th>
                        <th className={styles.noWrapForceRemoveBg}>曲风</th>
                        <th className={styles.noWrapForceRemoveBg}>备注</th>
                      </tr>
                    </thead>
                    <tbody className="songList">
                      <SongDetail
                        filteredSongList={filteredSongList}
                        handleClickToCopy={handleClickToCopy}
                      />
                    </tbody>
                  </Table>
                </Container>
              </div>
            </Col>
          </Row>

          {showToTopButton ? (
            <button
              onClick={scrollToTop}
              className={styles.backToTopBtn}
              title="返回顶部"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                />
              </svg>
            </button>
          ) : (
            <div></div>
          )}
          <footer className={styles.footer}>
            <Container>
              <Row>
                <Col xs={12} lg={5} className="text-center text-lg-end">
                  Copyright © 2022-2023 桃宝和她的家人们
                </Col>
                <Col xs={12} lg={2} className="text-center d-none d-lg-block">
                  |
                </Col>
                <Col
                  xs={12}
                  lg={5}
                  className="text-center text-lg-start pt-2 pt-lg-0"
                >
                  <Link href="https://beian.miit.gov.cn/" passHref>
                    <a
                      target="_blank"
                      style={{ textDecoration: "none", color: "#332D6A" }}
                    >
                      <div className="">
                        <Image
                          loader={imageLoader}
                          src="public_safety_police.webp"
                          alt="公安部备案"
                          width={16}
                          height={16}
                        />
                        苏ICP备17049545号-6
                      </div>
                    </a>
                  </Link>
                </Col>
              </Row>
            </Container>
          </footer>
        </section>
      </Container>
      <Offcanvas show={showIntro} onHide={handleCloseIntro}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>桃几的自我介绍</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className={styles.introParagraph}>
            ☆一个雨刮器形状的音乐播放软件
            <br />
            ☆全职电台主播，不是v，介意的朋友关注请慎重
            <br />
            {/** 每天8-12 15-18 21-0三档准时运行，10min内不算迟到！迟到一次会抽100块舰长红包！ <br /> */}
            ☆如果到时间没播请看动态，没发请假动态就是有意外情况迟到了～耐心等待一会儿即可
            <br />
            ☆曲风涉猎比较广泛，各种类型都收录了一些。
            <br />
            ☆目前收录的语种包括国粤日英，今年准备进军韩国市场（粤语需要看注音，其他语种都会读会写）
            <br />
            ☆嗓子受得了，如果不舒服会自己调整休息。大家不用担心～
            <br />
            ☆没有系统的学习过唱歌，所以最近找了老师开始学了
            <br />
            ☆直播内容99%唱歌+1%杂谈。平时说的一半是瞎扯，听个乐子即可～千万别当真！
            <br />
            ☆老阴阳人，讲话不好听，是故意的，但也是开玩笑的，心理承受能力较差的朋友请回避正面交流
            <br />
            ☆最喜欢（给我打米的）大家了！
            <br />
            ☆希望我唱的歌能让你快乐～
          </p>
          <Link href="https://www.tapechat.net/uu/taojiovo/8JIDAX1U" passHref>
            <a target="_blank">
              <Button
                className={styles.customRandomButton}
                style={{ border: "2px solid #332D6A", width: "100%" }}
              >
                <img
                  className={styles.biliIcon}
                  src="/tapechat.png"
                  alt="提问箱贴图"
                />{" "}
                匿名提问箱 <ChevronSVG />
              </Button>
            </a>
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
