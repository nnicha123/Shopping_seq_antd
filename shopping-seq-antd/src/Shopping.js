import React, { Component } from 'react'
import Favourites from './Favourites'
import CheckOuts from './CheckOuts'
import Cakes from './Cakes'
import Games from './Games'
import Bags from './Bags'
import './Cakes.css'
import cake1 from './cakes/blackwedding.PNG'
import cake2 from './cakes/cupcake.PNG'
import cake3 from './cakes/icecream.PNG'
import cake4 from './cakes/conecake.PNG'
import cake5 from './cakes/bluewedding.PNG'
import cake6 from './cakes/lightpinkcake.PNG'
import cake7 from './cakes/macaroons.PNG'
import cake8 from './cakes/orangecake.PNG'
import game1 from './games/game1.PNG'
import game2 from './games/game2.PNG'
import game3 from './games/game3.PNG'
import game4 from './games/game4.PNG'
import game5 from './games/game5.PNG'
import game6 from './games/game6.PNG'
import bag1 from './bags/black-red-tulip.jpg'
import bag2 from './bags/red-pink-tulip.jpg'
import bag3 from './bags/natural-yellow-tulip.jpg'
import bag4 from './bags/doctor-maroon.jpg'
import bag5 from './bags/doctor-navy.jpg'
import bag6 from './bags/doctor-black.jpg'
import 'antd/dist/antd.css'
import { Layout, Menu, Row, Col } from 'antd';
const { Header, Content, Footer } = Layout;

class Shopping extends Component {
    state = {
        cakes: [{ image: cake1, title: 'The black wedding cake', price: 30, quantity: 1 },
        { image: cake2, title: 'The pink jolly cupcake', price: 10, quantity: 1 },
        { image: cake3, title: 'The chocolate drip cake', price: 35, quantity: 1 },
        { image: cake4, title: 'The icecream cone cake', price: 25, quantity: 1 },
        { image: cake5, title: 'The blue wedding cake', price: 41, quantity: 1 },
        { image: cake6, title: 'The pink tall cake', price: 21, quantity: 1 },
        { image: cake7, title: 'Colorful Macaroons', price: 15, quantity: 1 },
        { image: cake8, title: 'Orange fruit cake', price: 16, quantity: 1 }],
        games: [{ image: game1, title: 'Adventurous Railway', price: 30, quantity: 1 },
        { image: game2, title: 'Sammy Suafeas', price: 10, quantity: 1 },
        { image: game3, title: 'Logical thinking game', price: 35, quantity: 1 },
        { image: game4, title: 'Train disaster', price: 25, quantity: 1 },
        { image: game5, title: 'Drop the balls', price: 41, quantity: 1 },
        { image: game6, title: 'Exciting pinballs', price: 21, quantity: 1 }],
        bags: [{ image: bag1, title: 'Black and Red Tulip', price: 30, quantity: 1 },
        { image: bag2, title: 'Sweet Pink Tulip', price: 10, quantity: 1 },
        { image: bag3, title: 'Natural Yellow Tulip', price: 35, quantity: 1 },
        { image: bag4, title: "Doctor's Maroon", price: 25, quantity: 1 },
        { image: bag5, title: "Doctor's Navy", price: 41, quantity: 1 },
        { image: bag6, title: "Doctor's Black", price: 21, quantity: 1 }],
        checkOut: [],
        favourite: [],
        components: [true, true, true],
        total: 0,
    }

    updateCheckout = (ind) => {
        let newItem = this.state.cakes[ind]
        newItem.quantity = 1
        this.setState({ checkOut: [...this.state.checkOut, newItem], total: this.state.total + this.state.cakes[ind].price })
    }
    updateFav = (ind) => {
        let newItem = this.state.cakes[ind]
        this.setState({ favourite: [...this.state.favourite, newItem] })
    }
    updateCheckoutGames = (ind) => {
        let newItem = this.state.games[ind]
        newItem.quantity = 1
        this.setState({ checkOut: [...this.state.checkOut, newItem], total: this.state.total + this.state.games[ind].price })
    }
    updateFavGames = (ind) => {
        let newItem = this.state.games[ind]
        this.setState({ favourite: [...this.state.favourite, newItem] })
    }
    updateCheckoutBags = (ind) => {
        let newItem = this.state.bags[ind]
        newItem.quantity = 1
        this.setState({ checkOut: [...this.state.checkOut, newItem], total: this.state.total + this.state.bags[ind].price })
    }
    updateFavBags = (ind) => {
        let newItem = this.state.bags[ind]
        this.setState({ favourite: [...this.state.favourite, newItem] })
    }
    deleteItem = (ind) => {
        const newList = [...this.state.checkOut].filter((el, index) => index !== ind)
        this.setState({ checkOut: [...newList], total: this.state.total - this.state.checkOut[ind].price * this.state.checkOut[ind].quantity })
    }
    deleteFav = (ind) => {
        const newFav = [...this.state.favourite].filter((el, index) => index !== ind)
        this.setState({ favourite: [...newFav] })
    }
    addQuantity = (index) => {
        const newData = [...this.state.checkOut]
        newData[index].quantity += 1
        let dataCal = 0
        for (let i = 0; i < newData.length; i++) dataCal += newData[i].price * newData[i].quantity
        this.setState({ checkOut: newData, total: dataCal })
    }
    deleteQuantity = (index) => {
        const newData = [...this.state.checkOut]
        if (newData[index].quantity > 1) {
            newData[index].quantity -= 1
            let dataCal = 0
            for (let i = 0; i < newData.length; i++) dataCal += newData[i].price * newData[i].quantity
            this.setState({ checkOut: newData, total: dataCal })
        }
    }

    render() {
        return (
            <div>
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" onClick={() => this.setState({ components: [true, true, true] })}>All</Menu.Item>
                        <Menu.Item key="2" onClick={() => this.setState({ components: [false, false, true] })}>Bags</Menu.Item>
                        <Menu.Item key="3" onClick={() => this.setState({ components: [true, false, false] })}>Cakes</Menu.Item>
                        <Menu.Item key="4" onClick={() => this.setState({ components: [false, true, false] })}>Games</Menu.Item>
                    </Menu>
                </Header>
                <Content>
                    <Row className="content">
                        <Col xl={17} md={14} sm={24}>
                            <h2 style={{ padding: '0 15px' }}>Shopping Items</h2>
                            {this.state.components[0] && <Cakes cakes={this.state.cakes} newCheckOut={this.updateCheckout} newFav={this.updateFav} />}
                            {this.state.components[1] && <Games games={this.state.games} newCheckOut={this.updateCheckoutGames} newFav={this.updateFavGames} />}
                            {this.state.components[2] && <Bags bags={this.state.bags} newCheckOut={this.updateCheckoutBags} newFav={this.updateFavBags} />}
                        </Col>
                        <Col xl={7} md={10} sm={24}>
                            {this.state.checkOut.length > 0 && <CheckOuts checkOut={this.state.checkOut} addQuantity={this.addQuantity} deleteQuantity={this.deleteQuantity} deleteItem={this.deleteItem} total={this.state.total} />}
                            {this.state.checkOut.length <= 0 && <div style={{ marginLeft: '15px', marginTop: '10px' }}>
                                <h2>CheckOut</h2>
                                <p>You have no checkout items. Checkout our new promotions!</p>
                            </div>}
                            {this.state.favourite.length > 0 && <Favourites favourite={this.state.favourite} deleteFav={this.deleteFav} />}
                            {this.state.favourite.length <= 0 && <div style={{ marginLeft: '15px', marginTop: '10px' }}>
                                <h2>Favourites</h2>
                                <p>You have no favourite item yet!</p>
                            </div>}
                        </Col>
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center', background: '#001529', color: 'white',padding:'30px',display:'flex',justifyContent:'center',alignItems:'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </div>
        )
    }
}

export default Shopping
