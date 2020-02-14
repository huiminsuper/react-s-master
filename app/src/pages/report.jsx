import React from 'react';
import { Title } from '../components/Title'


export default class Report extends React.Component {
      constructor(props){
            super(props);
      }

      render(){
            return(
                  <div>
                        { Title("Android 子导航二(待定...)") }
                        Report
                  </div>
            )
      }
}