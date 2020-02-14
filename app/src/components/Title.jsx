import React from 'react';

/**
@页标题(此为纯函数式组件)
@param name {String} 标题的内容
@return {Component} 返回Title组件
 */

export const Title = name => {
      const titleStyle = {
            padding: '5px 20px',
            color: '#5C6B77',
            backgroundColor: '#ecf6fd',
            marginTop: 20,
            marginBottom: 10,
            letterSpacing: 4,
            borderRdius: 3,
            overflow: 'hidden'
      }
      return (
            <div style={titleStyle}><h2>{name}</h2></div>
      )
}