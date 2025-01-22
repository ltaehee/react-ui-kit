# react-ui-kit (taehee-ui-components)

## Components

### 1.Tabs

#### 예시

```tsx
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
```

### 2.Carousel

#### 예시

```tsx
<Carousel itemLength={3}>
  <Carousel.ItemList>
    <Carousel.Item index={0}></Carousel.Item>
    <Carousel.Item index={1}></Carousel.Item>
    <Carousel.Item index={2}></Carousel.Item>
  </Carousel.ItemList>
  <Carousel.Navigator />
  <Carousel.Indicator />
</Carousel>
```

### 3.Calendar

#### 예시

```tsx
<Calendar onChange={handleChangeDate} value={date}>
  <Calendar.Current />
  <Calendar.Navigator />
  <Calendar.Body />
</Calendar>
```

### 4.Breadcrumb

#### 예시

```tsx
<Breadcrumb width="800px">
  <Breadcrumb.Item href="/a">A</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a">B-B</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a-a">C-C-C</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a-a-a">D-D-D-D</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a-a-a-a">E-E-E-E-E</Breadcrumb.Item>
</Breadcrumb>
```

### 5.Pagination

#### 예시

```tsx
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
```

### 6.Popover

#### 예시

```tsx
<Popover className="wrap" position="bottom-left">
  <Popover.Trigger>Open</Popover.Trigger>
  <Popover.Content>Place content for the popover here.</Popover.Content>
</Popover>
```

### 7.Progress

#### 예시

```tsx
<Progress stop={stop}></Progress>
```

### 8.Modal

#### 예시

```tsx
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
```

### 9.DatePicker

#### 예시

```tsx
<DatePicker
  date={new Date()}
  onChangeDate={handleChangeDate}
  className="datePickerWrap"
/>
```

### 10.Select

#### 예시

```tsx
<Select onChange={handleChangeValue} value={selectedValue}>
  <Select.Trigger>Open Select</Select.Trigger>
  <Select.Content>
    <Select.Item value={"1"}>One</Select.Item>
    <Select.Item value={"2"}>Two</Select.Item>
    <Select.Item value={"3"}>Three</Select.Item>
  </Select.Content>
</Select>
```
