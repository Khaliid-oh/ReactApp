import React from "react";
import Head from "next/head";
import Tab from "src/components/Tab";
import Tab from "src/components/Tab1";
import "./table.css";
import Filters from "src/components/Filters";
import Checbox from "src/components/Checbox";
import TableTitle from "src/components/TableTitle";
import Pill from "src/components/Pill";
import Pill from "src/components/Pill1";
import Pill from "src/components/Pill2";

function Table() {
  return (
    <>
      <Head>
        <title>{`Table`}</title>
      </Head>
      <div className={"table_wrapper"}>
        <div className={"frame"}>
          <Tab />
          <Tab />
        </div>
        <div className={"rectangle"} />
        <Filters prop={`variant2`} prop1={`variant2`} />
        <div className={"group_493"}>
          <div className={"rectangle_72"} />
          <div className={"frame19"}>
            <div className={"frame9"}>
              <div className={"frame5"}>
                <div className={"frame1"}>
                  <Checbox />
                </div>
                <div className={"frame2"}>
                  <Checbox />
                </div>
                <div className={"frame3"}>
                  <Checbox />
                </div>
                <div className={"frame4"}>
                  <Checbox />
                </div>
              </div>
              <div className={"frame7"}>
                <div className={"frame6"} />
                <img src={"/images/image.svg"} className={"styled"} />
                <img src={"/images/image1.svg"} className={"styled1"} />
                <img src={"/images/image2.svg"} className={"styled2"} />
              </div>
              <div className={"frame8"}>
                <TableTitle prop={`variant2`} content={`Product Name`} />
                <span className={"until_we_meet_again_bracelet_set_sku_98273492"}>
                  {`Until We Meet Again bracelet set`}
                  <span className={"styled3"}>{`SKU: 98273492`}</span>
                </span>
                <span
                  className={"personalised_cafetiere_and_cup_set_for_one_sku_46442353"}>
                  {`Personalised Cafetiere And Cup Set For One`}
                  <span className={"styled4"}>{`SKU: 46442353`}</span>
                </span>
                <span className={"doggo_tent_pet_boho_design_sku_25783256"}>
                  {`Doggo tent pet boho design`}
                  <span className={"styled5"}>{`SKU: 25783256`}</span>
                </span>
              </div>
            </div>
            <div className={"frame12"}>
              <div className={"frame11"}>
                <div className={"frame10"}>
                  <TableTitle prop={`variant2`} content={`Status`} />
                </div>
              </div>
              <div className={"frame_44"}>
                <Pill />
              </div>
              <div className={"frame_45"}>
                <Pill />
              </div>
              <div className={"frame_46"}>
                <Pill />
              </div>
            </div>
            <div className={"frame13"}>
              <TableTitle prop={`variant2`} content={`Qty`} />
              <span className={"_42"}>{`42 `}</span>
              <span className={"_3"}>{`3`}</span>
              <span className={"_31"}>{`3`}</span>
            </div>
            <div className={"frame15"}>
              <div className={"frame14"}>
                <TableTitle prop={`variant2`} content={`Category`} />
              </div>
              <span className={"men"}>{`Men`}</span>
              <span className={"children"}>{`Children`}</span>
              <span className={"home"}>{`Home`}</span>
            </div>
            <div className={"frame17"}>
              <div className={"frame16"}>
                <TableTitle prop={`variant2`} content={`On Sale`} />
              </div>
              <span className={"yes"}>{`Yes`}</span>
              <span className={"no"}>{`No`}</span>
              <span className={"no1"}>{`No`}</span>
            </div>
            <div className={"frame18"}>
              <TableTitle prop={`variant2`} content={`Vendor`} />
              <span className={"signature_gifts"}>{`Signature Gifts`}</span>
              <span className={"plush_world"}>{`Plush World`}</span>
              <span className={"plush_world1"}>{`Plush World`}</span>
            </div>
          </div>
        </div>
        <div className={"pagination"}>
          <div className={"frame20"}>
            <span className={"prev"}>{`Prev`}</span>
          </div>
          <div className={"frame21"}>
            <span className={"_1"}>{`1`}</span>
          </div>
          <div className={"frame22"}>
            <span className={"_2"}>{`2`}</span>
          </div>
          <div className={"frame23"}>
            <span className={"_32"}>{`3`}</span>
          </div>
          <div className={"frame24"}>
            <span className={"_4"}>{`4`}</span>
          </div>
          <div className={"frame25"}>
            <span className={"next"}>{`Next`}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
