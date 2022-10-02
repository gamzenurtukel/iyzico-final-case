import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.min.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { Menu, Layout } from "antd";
import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import SearchBar from './Components/SearchBar';

const { Header, Content } = Layout;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout className="layout">
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: "0" }}>
          <Menu mode="horizontal" defaultSelectedKeys={['home']} >
            <Menu.Item key="home" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="list" icon={<UnorderedListOutlined />}>
              <Link to="/starshipslist">Starships List</Link>
            </Menu.Item>
            <Menu.Item key="search">
              <SearchBar/>
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          style={{
            padding: '0 50px', marginTop: 64,
          }}
        >
          <div style={{
            minHeight: "700px",
            padding: "24px",
            background: " #fff",
            margin: "24px"
          }} className="site-layout-content">
            <App />
          </div>
        </Content>
      </Layout>
    </BrowserRouter>
  </Provider>
);


reportWebVitals();
