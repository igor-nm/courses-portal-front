import React, {Component} from 'react';

export default class About extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    };

    render() {

        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <div>
                    <h3 className="headerInfoCurse">Descritivo do curso</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus fringilla sagittis purus et feugiat. Sed finibus lorem nisi, eget vestibulum urna luctus eget.
                        Vivamus felis nisi, interdum a aliquam eu, tempus quis arcu. L
                        orem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fringilla sagittis purus et feugiat.
                        Sed finibus lorem nisi, eget vestibulum urna luctus eget.
                        Vivamus felis nisi, interdum a aliquam eu, tempus quis arcu.
                    </p>
                </div>
               <div>
                   <h3 className="headerInfoCurse">Objetivo do curso</h3>
                   <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Phasellus fringilla sagittis purus et feugiat. Sed finibus lorem nisi, eget vestibulum urna luctus eget.
                       Vivamus felis nisi, interdum a aliquam eu, tempus quis arcu. L
                       orem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fringilla sagittis purus et feugiat.
                       Sed finibus lorem nisi, eget vestibulum urna luctus eget.
                       Vivamus felis nisi, interdum a aliquam eu, tempus quis arcu.
                   </p>
               </div>
                <div>
                    <h3 className="headerInfoCurse">Carga horária</h3>
                    <p>
                        <h3 className="title">30 horas</h3>
                    </p>
                </div>
            </div>
        );
    }
}