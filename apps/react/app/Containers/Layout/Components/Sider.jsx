import React from 'react'
import {Link} from 'react-router-dom'
import {Layout, Menu, Icon} from 'antd'
import styles from '../index.pcss'

function Sider({collapsed, title}) {
  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className={styles.logo}>
        <p className={styles.title}>{title}</p>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Icon type="user"/>
          <span className="nav-text">nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/app">
            <Icon type="video-camera"/>
            <span className="nav-text">nav 2</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload"/>
          <span className="nav-text">nav 3</span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}


export default Sider
