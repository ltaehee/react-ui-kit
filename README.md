# react-ui-kit (taehee-ui-components)

## Components

### 1.Tabs

#### 사용법

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

#### 사용법

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
