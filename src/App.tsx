import { useEffect, useState } from "react";
import {
  Tabs,
  Carousel,
  Calendar,
  Breadcrumb,
  Pagination,
  Popover,
  Modal,
  DatePicker,
  Select,
  Accordion,
} from "./components";
import "./index.css";
import Progress from "./components/Progress";
import { Toaster, useToast } from "@ui/Toast";

function App() {
  const [date, setDate] = useState(new Date());
  const handleChangeTab = (index: number) => {
    console.log(index);
  };
  const handleChangeDate = (newDate: Date) => {
    setDate(newDate);
    console.log(date);
  };

  /* 페이지네이션 */
  const [currentPage, setCurrnetPage] = useState(1);
  const handlePageChange = (page: number) => {
    setCurrnetPage(page);
  };

  /* progress */
  const sleep = async (time: number): Promise<void> =>
    await new Promise((resolve) => setTimeout(() => resolve(), time));
  const [stop, setStop] = useState<boolean>(false);
  const getUserData = async () => {
    await sleep(2000);
    setStop(true);
  };
  useEffect(() => {
    getUserData();
  }, []);

  /* 모달 */
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  /* 셀렉트 */
  const [selectedValue, setSelectedValue] = useState<string>("1");
  const handleChangeValue = (selectedValue: string) => {
    console.log(selectedValue);
    setSelectedValue(selectedValue);
  };

  /* 토스트알림 */
  const { toast } = useToast();
  const handleClickOpenToast = () => {
    toast({ title: "ToastTitle", description: "ToastDescription" });
  };

  return (
    <>
      {/* <Tabs onChangeTab={handleChangeTab}>
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
        <Carousel.Navigator>
          {(prev, next) => (
            <div>
              <span onClick={prev}>prev</span>
              <span onClick={next}>next</span>
            </div>
          )}
        </Carousel.Navigator>
        <Carousel.Navigator />
        <Carousel.Indicator />
      </Carousel>
      <Calendar onChange={handleChangeDate} value={date}>
        <Calendar.Current />
        <Calendar.Navigator />
        <Calendar.Body />
      </Calendar>
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
      <Popover className="wrap" position="bottom-left">
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Place content for the popover here.</Popover.Content>
      </Popover> */}
      {/* <Progress stop={stop} /> */}
      <Modal onCloseModal={handleCloseModal} open={isOpen}>
        <Modal.Backdrop />
        <Modal.Trigger>
          <button>custom-modal-open</button>
        </Modal.Trigger>
        <Modal.Content className="ModalContentWrap">
          <div>custom-modal-content</div>
          <Modal.Close className="ModalClose">
            <button>custom-modal-close</button>
          </Modal.Close>
        </Modal.Content>
      </Modal>

      <DatePicker
        date={new Date()}
        onChangeDate={handleChangeDate}
        className="datePickerWrap"
      />
      <Select onChange={handleChangeValue} value={selectedValue}>
        <Select.Trigger>Open Select</Select.Trigger>
        <Select.Content>
          <Select.Item value={"1"}>One</Select.Item>
          <Select.Item value={"2"}>Two</Select.Item>
          <Select.Item value={"3"}>Three</Select.Item>
        </Select.Content>
      </Select>

      <Accordion>
        <Accordion.Item index={0}>
          <Accordion.Trigger>Trigger1</Accordion.Trigger>
          <Accordion.Content>Content1</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item index={1}>
          <Accordion.Trigger>Trigger2</Accordion.Trigger>
          <Accordion.Content>Content2</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item index={2}>
          <Accordion.Trigger>Trigger3</Accordion.Trigger>
          <Accordion.Content>Content3</Accordion.Content>
        </Accordion.Item>
      </Accordion>
      <Toaster />
      <button onClick={handleClickOpenToast}>open toast</button>
    </>
  );
}

export default App;
