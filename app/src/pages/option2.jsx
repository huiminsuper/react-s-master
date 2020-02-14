import React from 'react';
import { Title } from '../components/Title'


export default class Option2 extends React.Component {
      constructor(props){
            super(props);
      }

      render(){
            return(
                  <div>
                        { Title("Apple 子导航二(待定...)") }
                        option2
                  </div>
            )
      }
}