import { useState } from "react";
import { Tabs, Carousel, Calendar, Breadcrumb, Pagination } from "./components";
import Popover from "./components/Popover";
import "./index.css";

function App() {
  const [date, setDate] = useState(new Date());
  const handleChangeTab = (index: number) => {
    console.log(index);
  };
  const handleChangeDate = (newDate: Date) => {
    setDate(newDate); // 날짜를 업데이트하는 함수
  };

  /* 페이지네이션 */
  const [currentPage, setCurrnetPage] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrnetPage(page);
  };

  return (
    <>
      <Tabs onChangeTab={handleChangeTab}>
        <Tabs.MenuList>
          <Tabs.Menu index={1}>Menu1</Tabs.Menu>
          <Tabs.Menu index={2}>Menu2</Tabs.Menu>
          <Tabs.Menu index={3}>Menu3</Tabs.Menu>
        </Tabs.MenuList>
        <Tabs.Pannel index={1}>Content1</Tabs.Pannel>
        <Tabs.Pannel index={2}>Content2</Tabs.Pannel>
        <Tabs.Pannel index={3}>Content3</Tabs.Pannel>
      </Tabs>
      <Carousel itemLength={3}>
        <Carousel.ItemList>
          <Carousel.Item index={0}></Carousel.Item>
          <Carousel.Item index={1}></Carousel.Item>
          <Carousel.Item index={2}></Carousel.Item>
        </Carousel.ItemList>
        <Carousel.Navigator />
        <Carousel.Indicator />
      </Carousel>
      {/* <Calendar onChange={handleChangeDate} value={date}>
        <Calendar.Current />
        <Calendar.Navigator />
        <Calendar.Body />
      </Calendar> */}
      <Breadcrumb width="800px">
        <Breadcrumb.Item href="/a">A</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a">B-B</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a-a">C-C-C</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a-a-a">D-D-D-D</Breadcrumb.Item>
        <Breadcrumb.Item href="/a-a-a-a-a">E-E-E-E-E</Breadcrumb.Item>
      </Breadcrumb>
      <Pagination
        itemLength={235}
        itemPerPage={10}
        pageBlockSize={10}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      >
        <Pagination.PageButtons />
        <Pagination.Navigator />
      </Pagination>
      <Popover className="wrap">
        <Popover.Trigger className="popoverTrigger">Open</Popover.Trigger>
        <Popover.Content className="popoverContent">
          Place content for the popover here.
        </Popover.Content>
      </Popover>
    </>
  );
}

export default App;
