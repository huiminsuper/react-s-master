import React from 'react';
import { Title } from '../components/Title'


export default class Option1 extends React.Component {
      constructor(props){
            super(props);
      }

      render(){
            return(
                  <div>
                        { Title("Apple 子导航一(待定...)") }
                        option1
                  </div>
            )
      }
}