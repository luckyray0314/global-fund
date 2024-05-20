"use client";

import React from "react";
import Image from "next/image";
import { Button, Input, Slider } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";

const activities = [
  {
    num: "1",
    date: "24/05/24",
    name: "Lorem ipsum",
    recent: "24/05/24 18:24",
    upload: "y",
    question:
      "Lorem ipsum dolor sit amet consectetur. Turpis auctor aliquam mauris sit?",
  },
  {
    num: "2",
    date: "24/05/24",
    name: "Lorem ipsum",
    recent: "24/05/24 18:24",
    upload: "y",
    question:
      "Lorem ipsum dolor sit amet consectetur. Turpis auctor aliquam mauris sit?",
  },
  {
    num: "3",
    date: "24/05/24",
    name: "Lorem ipsum",
    recent: "24/05/24 18:24",
    upload: "y",
    question:
      "Lorem ipsum dolor sit amet consectetur. Turpis auctor aliquam mauris sit?",
  },
  {
    num: "4",
    date: "24/05/24",
    name: "Lorem ipsum",
    recent: "24/05/24 18:24",
    upload: "n",
    question:
      "Lorem ipsum dolor sit amet consectetur. Turpis auctor aliquam mauris sit?",
  },
  {
    num: "5",
    date: "24/05/24",
    name: "Lorem ipsum",
    recent: "24/05/24 18:24",
    upload: "y",
    question:
      "Lorem ipsum dolor sit amet consectetur. Turpis auctor aliquam mauris sit?",
  },
  {
    num: "6",
    date: "24/05/24",
    name: "Lorem ipsum",
    recent: "24/05/24 18:24",
    upload: "y",
    question:
      "Lorem ipsum dolor sit amet consectetur. Turpis auctor aliquam mauris sit?",
  },
  {
    num: "7",
    date: "24/05/24",
    name: "Lorem ipsum",
    recent: "24/05/24 18:24",
    upload: "n",
    question:
      "Lorem ipsum dolor sit amet consectetur. Turpis auctor aliquam mauris sit?",
  },
  {
    num: "8",
    date: "24/05/24",
    name: "Lorem ipsum",
    recent: "24/05/24 18:24",
    upload: "n",
    question:
      "Lorem ipsum dolor sit amet consectetur. Turpis auctor aliquam mauris sit?",
  },
  {
    num: "9",
    date: "24/05/24",
    name: "Lorem ipsum",
    recent: "24/05/24 18:24",
    upload: "y",
    question:
      "Lorem ipsum dolor sit amet consectetur. Turpis auctor aliquam mauris sit?",
  },
  {
    num: "10",
    date: "24/05/24",
    name: "Lorem ipsum",
    recent: "24/05/24 18:24",
    upload: "y",
    question:
      "Lorem ipsum dolor sit amet consectetur. Turpis auctor aliquam mauris sit?",
  },
  {
    num: "11",
    date: "24/05/24",
    name: "Lorem ipsum",
    recent: "24/05/24 18:24",
    upload: "y",
    question:
      "Lorem ipsum dolor sit amet consectetur. Turpis auctor aliquam mauris sit?",
  },
  {
    num: "12",
    date: "24/05/24",
    name: "Lorem ipsum",
    recent: "24/05/24 18:24",
    upload: "y",
    question:
      "Lorem ipsum dolor sit amet consectetur. Turpis auctor aliquam mauris sit?",
  },
];

const bases = [
  {
    num: "1",
    date: "24/05/24",
    file: "y",
    type: 'File "Lorem ipsum"',
    size: "10 000 KB",
    action: "delete",
  },
  {
    num: "2",
    date: "24/05/24",
    file: "y",
    type: 'File "Lorem ipsum"',
    size: "10 000 KB",
    action: "delete",
  },
  {
    num: "3",
    date: "24/05/24",
    file: "y",
    type: 'File "Lorem ipsum"',
    size: "10 000 KB",
    action: "delete",
  },
  {
    num: "4",
    date: "24/05/24",
    file: "y",
    type: 'File "Lorem ipsum"',
    size: "10 000 KB",
    action: "delete",
  },
  {
    num: "5",
    date: "24/05/24",
    file: "y",
    type: 'File "Lorem ipsum"',
    size: "10 000 KB",
    action: "delete",
  },
  {
    num: "6",
    date: "24/05/24",
    file: "y",
    type: 'File "Lorem ipsum"',
    size: "10 000 KB",
    action: "delete",
  },
  {
    num: "7",
    date: "24/05/24",
    file: "y",
    type: 'File "Lorem ipsum"',
    size: "10 000 KB",
    action: "delete",
  },
  {
    num: "8",
    date: "24/05/24",
    file: "y",
    type: 'File "Lorem ipsum"',
    size: "10 000 KB",
    action: "delete",
  },
  {
    num: "9",
    date: "24/05/24",
    file: "y",
    type: 'File "Lorem ipsum"',
    size: "10 000 KB",
    action: "delete",
  },
  {
    num: "10",
    date: "24/05/24",
    file: "y",
    type: 'File "Lorem ipsum"',
    size: "10 000 KB",
    action: "delete",
  },
  {
    num: "11",
    date: "24/05/24",
    file: "y",
    type: 'File "Lorem ipsum"',
    size: "10 000 KB",
    action: "delete",
  },
  {
    num: "12",
    date: "24/05/24",
    file: "y",
    type: 'File "Lorem ipsum"',
    size: "10 000 KB",
    action: "delete",
  },
];

export default function Overview() {
  const [page, setPage] = React.useState(1);
  const [page2, setPage2] = React.useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(activities.length / rowsPerPage);
  const pages2 = Math.ceil(bases.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return activities.slice(start, end);
  }, [page, activities]);

  const items2 = React.useMemo(() => {
    const start = (page2 - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return bases.slice(start, end);
  }, [page2, bases]);

  return (
    <>
      <div className="px-[130px] mt-[60px] ">
        <h2 className="text-[15px] font-extrabold">Overview</h2>
        <div className="w-full flex gap-[20px] font-sans mt-[20px]">
          <div className="text-center text-white bg-[#2E4DF9] rounded-[3px] w-1/6 h-[100px] flex flex-col justify-center">
            <p className="text-[15px]">Total Likes</p>
            <p className="text-[20px] font-extrabold">45</p>
          </div>
          <div className="text-center text-white bg-[#2E4DF9] rounded-[3px] w-1/6 h-[100px] flex flex-col justify-center">
            <p className="text-[15px]">Total Views</p>
            <p className="text-[20px] font-extrabold">112</p>
          </div>
          <div className="text-center text-white bg-[#2E4DF9] rounded-[3px] w-1/6 h-[100px] flex flex-col justify-center">
            <p className="text-[15px]">Comments</p>
            <p className="text-[20px] font-extrabold">65</p>
          </div>
          <div className="text-center text-white bg-[#2E4DF9] rounded-[3px] w-1/6 h-[100px] flex flex-col justify-center">
            <p className="text-[15px]">Total Chats</p>
            <p className="text-[20px] font-extrabold">11</p>
          </div>
          <div className="text-center text-white bg-[#2E4DF9] rounded-[3px] w-1/6 h-[100px] flex flex-col justify-center">
            <p className="text-[15px]">Total Share</p>
            <p className="text-[20px] font-extrabold">24</p>
          </div>
          <div className="text-center text-white bg-[#2E4DF9] rounded-[3px] w-1/6 h-[100px] flex flex-col justify-center">
            <p className="text-[15px]">Total File Uploads</p>
            <p className="text-[20px] font-extrabold">24</p>
          </div>
        </div>
      </div>

      <div className="px-[130px] mt-[60px] ">
        <h2 className="text-[15px] font-extrabold">Activity</h2>
        <Table
          aria-label="Example table with client side pagination"
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                // color="primary"
                classNames={{
                  item: "data-[pressed=true]:text-white",
                }}
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
          classNames={{
            wrapper:
              "min-h-[222px] mt-[20px] rounded-none shadow-none px-0 pt-0",
            th: "bg-white border-b border-[#2E4DF9] font-bold text-black text-[14.4px] capitalize",
          }}
        >
          <TableHeader>
            <TableColumn key="num">N</TableColumn>
            <TableColumn key="date">Date</TableColumn>
            <TableColumn key="name">Name</TableColumn>
            <TableColumn key="recent">Recent Activity</TableColumn>
            <TableColumn key="upload">Uploaded File(s)</TableColumn>
            <TableColumn key="question">Question</TableColumn>
          </TableHeader>
          <TableBody items={items}>
            {(item) => (
              <TableRow key={item.name}>
                {(columnKey) =>
                  columnKey == "upload" ? (
                    <TableCell>
                      {getKeyValue(item, columnKey) == "y" ? (
                        <Image
                          src={"/doc.png"}
                          width={16}
                          height={20}
                          alt="doc"
                        />
                      ) : (
                        ""
                      )}
                    </TableCell>
                  ) : (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )
                }
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="px-[130px] mt-[60px] ">
        <h2 className="text-[15px] font-extrabold">Ingest New Files For AI</h2>
        <Button className="mt-[20px] w-[180px] h-[46px] bg-[#2E4DF9] rounded-[3px] text-[16px] font-extrabold text-wrap text-white">
          Upload
        </Button>
      </div>

      <div className="px-[130px] mt-[60px] ">
        <h2 className="text-[15px] font-extrabold">AI Knowledge Base</h2>
        <Table
          aria-label="Example table with client side pagination"
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                // color="primary"
                classNames={{
                  item: "data-[pressed=true]:text-white",
                }}
                page={page2}
                total={pages2}
                onChange={(page) => setPage2(page)}
              />
            </div>
          }
          classNames={{
            wrapper:
              "min-h-[222px] mt-[20px] rounded-none shadow-none px-0 pt-0",
            th: "bg-white border-b border-[#2E4DF9] font-bold text-black text-[14.4px] capitalize",
          }}
        >
          <TableHeader>
            <TableColumn key="num">N</TableColumn>
            <TableColumn key="date">Ingestion Date</TableColumn>
            <TableColumn key="file">File</TableColumn>
            <TableColumn key="type">Type</TableColumn>
            <TableColumn key="size">Size</TableColumn>
            <TableColumn key="action"> </TableColumn>
          </TableHeader>
          <TableBody items={items2}>
            {(item) => (
              <TableRow key={item.num}>
                {(columnKey) =>
                  columnKey == "file" || columnKey == "action" ? (
                    <TableCell>
                      {getKeyValue(item, columnKey) == "y" ? (
                        <Image
                          src={"/doc.png"}
                          width={16}
                          height={20}
                          alt="doc"
                        />
                      ) : getKeyValue(item, columnKey) == "delete" ? (
                        <Image
                          src={"/delete.png"}
                          width={16}
                          height={18}
                          alt="delete"
                        />
                      ) : (
                        ""
                      )}
                    </TableCell>
                  ) : (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )
                }
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
