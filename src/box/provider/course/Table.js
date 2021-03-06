import React, {Component} from "react";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';
import httpService from '../../../service/HttpService';
import RaisedButton from 'material-ui/RaisedButton';
import EditIco from 'material-ui/svg-icons/content/create';
import DeleteIco from 'material-ui/svg-icons/content/delete-sweep';
import PubSub from 'pubsub-js';
import _ from 'lodash';


class TableFind extends Component {


    constructor(){
        super();
        this.state={rows:'',courses:'', course:'',};
        this.httpService = new httpService();
    }

    styles = {
        tableHeader: {backgroundColor: '#f1f1f1', textAlign: 'left', fontSize: '20px'},
        tableBody: {cursor: 'pointer'},
    };



    componentDidMount(){
        PubSub.publish('header-label','Pesquisar curso');
        PubSub.subscribe('search-courses',this.fncSearchCourses);
        this.fncSearchCourses();
    }

    fncSearchCourses = ()=>{
        this.httpService.get('/course', localStorage.getItem('auth-token'))
            .then(response => {
                if (response.status !== 501 )
                {
                    return response.json();
                }
                throw new Error('Falha de autenticação.');
            })
            .then(success => {
                this.setState({'courses':success});
                localStorage.setItem('courses', JSON.stringify(success));
                this.fncMakeRows();
            })
            .catch(error => {this.setState({msg:error.message});});

    };


    fncMakeRows = () =>{
        let rows = this.state.courses.map((course) =>
            <TableRow key={course._id}>
                <TableRowColumn>{course.name}</TableRowColumn>
                <TableRowColumn>{course.status ? 'ativo' : 'inativo' }</TableRowColumn>
                <TableRowColumn>
                    <RaisedButton
                        label="editar"
                        backgroundColor="#00a1fc"
                        onTouchTap={() => this.fncEditCourse(course._id)}
                        icon={<EditIco color="#FFF"/>}
                        labelStyle={{color: 'white'}}/>
                    <RaisedButton
                        label="delete"
                        backgroundColor="#ff2930"
                        onTouchTap={() => this.fncEditCourse(course._id)}
                        icon={<DeleteIco color="#FFF"/>}
                        style={{marginLeft:'3%'}}
                        labelStyle={{color: 'white'}}/>
                </TableRowColumn>
            </TableRow>
        );

        this.setState({'rows':rows});
    };


    fncEditCourse = (id) => {
        let course = _.filter(this.state.courses, (course)=> {return course._id === id})[0];
        PubSub.publish('switch-to-crud',course);
    };

    render() {
        return (

              <div>
                  <Table>
                      <TableHeader
                          adjustForCheckbox={false}
                          enableSelectAll={false}
                          displaySelectAll={false}
                          style={this.styles.tableHeader}>
                          <TableRow>
                              <TableHeaderColumn>Nome do curso</TableHeaderColumn>
                              <TableHeaderColumn>Situação do curso</TableHeaderColumn>
                              <TableHeaderColumn>Ação</TableHeaderColumn>
                          </TableRow>
                      </TableHeader>
                      <TableBody displayRowCheckbox={false}
                                 showRowHover={true}
                                 style={this.styles.tableBody}>
                          {this.state.rows}
                      </TableBody>
                  </Table>
              </div>

        )
    }
}

export default TableFind;
