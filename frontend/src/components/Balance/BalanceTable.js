import React from 'react'
import '../../App.css'
import {Table} from 'react-bootstrap';

const BalanceTable = (props) => {
    return ( 
        <Table style={{width: '300px', marginTop: "20px"}} striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Shared</th>
            <th>Expolered</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Rating given</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>1</td>
            <td>12/10</td>
            <td>4.3</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>2</td>
            <td>18/08</td>
            <td>4.6</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Boaz</td>
            <td>Touval</td>
            <td>2.3</td>
            <td>03.02</td>
            <td>3.9</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>1</td>
            <td>12/10</td>
            <td>4.3</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>2</td>
            <td>18/08</td>
            <td>4.6</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Boaz</td>
            <td>Touval</td>
            <td>2.3</td>
            <td>03.02</td>
            <td>3.9</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>1</td>
            <td>12/10</td>
            <td>4.3</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>2</td>
            <td>18/08</td>
            <td>4.6</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Boaz</td>
            <td>Touval</td>
            <td>2.3</td>
            <td>03.02</td>
            <td>3.9</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Boaz</td>
            <td>Touval</td>
            <td>2.3</td>
            <td>03.02</td>
            <td>3.9</td>
          </tr>
        </tbody>
      </Table>
    )
}

export default BalanceTable 