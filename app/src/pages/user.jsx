import React from 'react';
import { Title } from '../components/Title'


export default class User extends React.Component {
      constructor(props){
            super(props);
      }

      render(){
            return(
                  <div>
                        { Title("用户中心") }
                        user
                  </div>
            )
      }
}