## 🧰 `react-ui-kit` (taehee-ui-components)

`react-ui-kit`은 반복적으로 사용하는 UI 컴포넌트들을 효율적으로 관리하기 위해 만든 React 기반 UI 라이브러리입니다.  
TypeScript로 작성되었으며, 컴포넌트 구조와 인터페이스만 제공하고 **스타일은 사용자 프로젝트에 맞게 자유롭게 커스터마이징**할 수 있도록 설계되었습니다.

## Components

### 1.Tabs

#### Children

- Tabs.MenuList
- Tabs.Menu
- Tabs.Pannel

#### 예시

<img src="./public/componentsGifs/tab.gif" width="400" alt="Tabs demo" />

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

---

### 2.Carousel

#### Children

- Carousel.ItemList
- Carousel.Item
- Carousel.Navigator
- Carousel.Indicator

#### 예시

<img src="./public/componentsGifs/carousel.gif" width="400" alt="Tabs demo" />

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

---

### 3.Calendar

#### Children

- Calendar.Current
- Calendar.Navigator
- Calendar.Body

#### 예시

<img src="./public/componentsGifs/calendar.gif" width="400" alt="Tabs demo" />

```tsx
<Calendar onChange={handleChangeDate} value={date}>
  <Calendar.Current />
  <Calendar.Navigator />
  <Calendar.Body />
</Calendar>
```

---

### 4.Breadcrumb

#### Children

- Breadcrumb.Item

#### 예시

<img src="./public/componentsGifs/breadcrumb.png" width="400" alt="Tabs demo" />

```tsx
<Breadcrumb width="800px">
  <Breadcrumb.Item href="/a">A</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a">B-B</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a-a">C-C-C</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a-a-a">D-D-D-D</Breadcrumb.Item>
  <Breadcrumb.Item href="/a-a-a-a-a">E-E-E-E-E</Breadcrumb.Item>
</Breadcrumb>
```

---

### 5.Pagination

#### Children

- Pagination.PageButtons
- Pagination.Navigator

#### 예시

<img src="./public/componentsGifs/pagination.gif" width="400" alt="Tabs demo" />

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

---

### 6.Popover

#### Children

- Popover.Trigger
- Popover.Content

#### 예시

<img src="./public/tab component.gif" width="400" alt="Tabs demo" />

```tsx
<Popover position="bottom-left">
  <Popover.Trigger>Open</Popover.Trigger>
  <Popover.Content>Place content for the popover here.</Popover.Content>
</Popover>
```

---

### 7.Progress

#### 예시

<img src="./public/tab component.gif" width="400" alt="Tabs demo" />

```tsx
<Progress stop={stop}></Progress>
```

---

### 8.Modal

#### Children

- Modal.Trigger
- Modal.Content
- Modal.Close

#### 예시

<img src="./public/tab component.gif" width="400" alt="Tabs demo" />

```tsx
<Modal onCloseModal={handleCloseModal} open={isOpen}>
  <Modal.Backdrop />
  <Modal.Trigger>
    <button>custom-modal-open</button>
  </Modal.Trigger>
  <Modal.Content>
    <div>custom-modal-content</div>
    <Modal.Close>
      <button>custom-modal-close</button>
    </Modal.Close>
  </Modal.Content>
</Modal>
```

---

### 9.DatePicker

#### 예시

<img src="./public/tab component.gif" width="400" alt="Tabs demo" />

```tsx
<DatePicker date={new Date()} onChangeDate={handleChangeDate} />
```

- 내부 컴포넌트 설명
- 고정된 className을 사용

```tsx
<Popover position="bottom-left" className={datePickerCls}>
  <Popover.Trigger className="datepicker-trigger">
    {pickDate.toISOString().split('T')[0]}
  </Popover.Trigger>
  <Popover.Content className="datepicker-content">
    <Calendar onChange={handleChangeDate} value={date}>
      <Calendar.Current className="datepicker-calendar-current" />
      <Calendar.Navigator className="datepicker-calendar-navigator" />
      <Calendar.Body className="datepicker-calendar-body" />
    </Calendar>
  </Popover.Content>
</Popover>
```

---

### 10.Select

#### Children

- Select.Trigger
- Select.Content
- Select.Item

#### 예시

<img src="./public/tab component.gif" width="400" alt="Tabs demo" />

```tsx
<Select onChange={handleChangeValue} value={selectedValue}>
  <Select.Trigger>Open Select</Select.Trigger>
  <Select.Content>
    <Select.Item value={'1'}>One</Select.Item>
    <Select.Item value={'2'}>Two</Select.Item>
    <Select.Item value={'3'}>Three</Select.Item>
  </Select.Content>
</Select>
```

---

### 11.Accordion

#### Children

- Accordion.Trigger
- Accordion.Content
- Accordion.Item

#### 예시

<img src="./public/tab component.gif" width="400" alt="Tabs demo" />

```tsx
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
```

---

### 12.Toast

#### Children

- Toaster
- ToastTitle
- ToastDescription
- ToastClose

#### 예시

<img src="./public/tab component.gif" width="400" alt="Tabs demo" />

- classname:toaster을 사용 해서 커스텀
- closeCustom는 필수x

```tsx

  const { toast } = useToast();
  const handleClickOpenToast = () => {
    toast({ title: "ToastTitle", description: "ToastDescription",duration: 3000,closeCustom: <>closeCustomBtn</>, });
  };

  return (
    <Toaster />
    <button onClick={handleClickOpenToast}>open toast</button>
  )
```
