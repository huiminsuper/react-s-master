import React from 'react';
import { Title } from '../components/Title'


export default class Setting extends React.Component {
      constructor(props){
            super(props);
      }

      render(){
            return(
                  <div>
                        { Title("系统配置") }
                        setting
                  </div>
            )
      }
}