import React, { Component } from 'react';
import { 
  Container, 
  Header, 
  Tab, 
  Tabs, 
  ScrollableTab, 
  Card, 
  CardItem, 
  Left, 
  Body, 
  Text, 
  Right, 
  Icon,
  Footer, 
  FooterTab,
  Button,
  Title
} from 'native-base';
import { Image, ScrollView } from 'react-native';
export default class TabsScrollableExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent>
              <Icon name='pricetags' />
            </Button>
          </Left>
          <Body>
            <Title>KARCIS</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="All">
            <ScrollView vertical>
            <Card>
                <CardItem>
                  <Left>
                  <Body>
                      <Text>UFC 246</Text>
                      <Text note>Las Vegas, NV</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-Xn4xVXTYY92i3KNuDKRUijBpGXt3uOhQohTJQcOmjKuzuc0f'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}/>
                    <Text>1000000</Text>
                  </Left>
                  <Right>
                    <Icon name="heart"/>
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Left>
                  <Body>
                      <Text>Auto Club 400</Text>
                      <Text note>Fontana, CA</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://assets.primesport.com/prod/images/auto-club-400-logo.png'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}/>
                    <Text>1000000</Text>
                  </Left>
                  <Right>
                    <Icon name="heart"/>
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Left>
                  <Body>
                      <Text>Open Trip Bromo Sunrise (Keberangkatan Malang)</Text>
                      <Text note>Kota Malang - Jawa Timur</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://static.tiket.photos/image/upload/v1562229998/eventConvertedImages/2019/07/04/748eacfe-6db1-4cd6-8bde-63bde3317d06e38175a9ed0036eebf74990a7969d864.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}/>
                    <Text>1000000</Text>
                  </Left>
                  <Right>
                    <Icon name="heart"/>
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Left>
                  <Body>
                      <Text>Konser Eksklusif Didi Kempot</Text>
                      <Text note>Mall Taman Palem, Jalan Kamal Raya, RW.10, East Cengkareng, West Jakarta City, Jakarta, Indonesia</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://static.tiket.photos/image/upload/v1577099376/eventConvertedImages/2019/12/23/7b86d55c-0b7b-4e45-8bc3-11bb4d492c2b-1577099375642-476bb3f89b16809bb10209a83c9f82dd.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}/>
                    <Text>1000000</Text>
                  </Left>
                  <Right>
                    <Icon name="heart"/>
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Left>
                  <Body>
                      <Text>DAIHATSU INDONESIA MASTER 2020</Text>
                      <Text note>Istora Senayan, Jalan Pintu Satu Senayan, RT.1/RW.3, Gelora, South Jakarta City, Jakarta, Indonesia</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://static.tiket.photos/image/upload/v1574414943/eventConvertedImages/2019/11/22/933a1f50-192f-4527-8e26-f52444cbae13-1574414942804-fcaf1ad7e1d77e96960dd9d108e04f8d.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}/>
                    <Text>1000000</Text>
                  </Left>
                  <Right>
                    <Icon name="heart"/>
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Left>
                  <Body>
                      <Text>MOTOGP THAILAND 2020</Text>
                      <Text note>Chang International Circuit Buriram Buri Ram, Thailand</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://static.tiket.photos/image/upload/v1577693566/eventConvertedImages/2019/12/30/7690caba-c785-4c33-886f-cbfa559f065f-1577693565492-f6d00e4125b1b184926587ebb80e12de.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}/>
                    <Text>1000000</Text>
                  </Left>
                  <Right>
                    <Icon name="heart"/>
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Left>
                  <Body>
                      <Text>Science Centre Singapura</Text>
                      <Text note>Science Centre Singapura</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://static.tiket.photos/image/upload/v1567847954/eventThirdParty/2019/09/07/9032075c-a920-4c99-8d82-c3a96274c234-1567847953170-0d5b1c4c7f720f698946c7f6ab08f687.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}/>
                    <Text>1000000</Text>
                  </Left>
                  <Right>
                    <Icon name="heart"/>
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Left>
                  <Body>
                      <Text>National Museum of Emerging Science and Innovation (Miraikan) Admission Ticket</Text>
                      <Text note>National Museum of Emerging Science and Innovation (Miraikan) Admission Ticket</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://static.tiket.photos/image/upload/v1569517205/eventThirdParty/2019/09/27/a0d30b83-d0c6-4d95-94d5-723291d24bf9-1569517204956-0d5b1c4c7f720f698946c7f6ab08f687.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}/>
                    <Text>1000000</Text>
                  </Left>
                  <Right>
                    <Icon name="heart"/>
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Left>
                  <Body>
                      <Text>Hammersonic 2020</Text>
                      <Text note>Jakarta, DKI Jakarta</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://hammersonic.com/file/2019/12/Hammersonic-2019-Full-Line-Up.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}/>
                    <Text>1000000</Text>
                  </Left>
                  <Right>
                    <Icon name="heart"/>
                  </Right>
                </CardItem>
              </Card>
            </ScrollView>
          </Tab>
          <Tab heading="Sport">
          <ScrollView vertical>
          <Card>
                <CardItem>
                  <Left>
                  <Body>
                      <Text>DAIHATSU INDONESIA MASTER 2020</Text>
                      <Text note>Istora Senayan, Jalan Pintu Satu Senayan, RT.1/RW.3, Gelora, South Jakarta City, Jakarta, Indonesia</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://static.tiket.photos/image/upload/v1574414943/eventConvertedImages/2019/11/22/933a1f50-192f-4527-8e26-f52444cbae13-1574414942804-fcaf1ad7e1d77e96960dd9d108e04f8d.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}/>
                    <Text>1000000</Text>
                  </Left>
                  <Right>
                    <Icon name="heart"/>
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Left>
                  <Body>
                      <Text>UFC 246</Text>
                      <Text note>Las Vegas, NV</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-Xn4xVXTYY92i3KNuDKRUijBpGXt3uOhQohTJQcOmjKuzuc0f'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}/>
                    <Text>1000000</Text>
                  </Left>
                  <Right>
                    <Icon name="heart"/>
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Left>
                  <Body>
                      <Text>Auto Club 400</Text>
                      <Text note>Fontana, CA</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://assets.primesport.com/prod/images/auto-club-400-logo.png'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}/>
                    <Text>1000000</Text>
                  </Left>
                  <Right>
                    <Icon name="heart"/>
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Left>
                  <Body>
                      <Text>Open Trip Bromo Sunrise (Keberangkatan Malang)</Text>
                      <Text note>Kota Malang - Jawa Timur</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://static.tiket.photos/image/upload/v1562229998/eventConvertedImages/2019/07/04/748eacfe-6db1-4cd6-8bde-63bde3317d06e38175a9ed0036eebf74990a7969d864.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}/>
                    <Text>1000000</Text>
                  </Left>
                  <Right>
                    <Icon name="heart"/>
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Left>
                  <Body>
                      <Text>MOTOGP THAILAND 2020</Text>
                      <Text note>Chang International Circuit Buriram Buri Ram, Thailand</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://static.tiket.photos/image/upload/v1577693566/eventConvertedImages/2019/12/30/7690caba-c785-4c33-886f-cbfa559f065f-1577693565492-f6d00e4125b1b184926587ebb80e12de.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}/>
                    <Text>1000000</Text>
                  </Left>
                  <Right>
                    <Icon name="heart"/>
                  </Right>
                </CardItem>
              </Card>
            </ScrollView>
          </Tab>
          <Tab heading="Music">
          <ScrollView vertical>
          <Card>
                <CardItem>
                  <Left>
                  <Body>
                      <Text>Hammersonic 2020</Text>
                      <Text note>Jakarta, DKI Jakarta</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://hammersonic.com/file/2019/12/Hammersonic-2019-Full-Line-Up.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}/>
                    <Text>1000000</Text>
                  </Left>
                  <Right>
                    <Icon name="heart"/>
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Left>
                  <Body>
                      <Text>Konser Eksklusif Didi Kempot</Text>
                      <Text note>Mall Taman Palem, Jalan Kamal Raya, RW.10, East Cengkareng, West Jakarta City, Jakarta, Indonesia</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://static.tiket.photos/image/upload/v1577099376/eventConvertedImages/2019/12/23/7b86d55c-0b7b-4e45-8bc3-11bb4d492c2b-1577099375642-476bb3f89b16809bb10209a83c9f82dd.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}/>
                    <Text>1000000</Text>
                  </Left>
                  <Right>
                    <Icon name="heart"/>
                  </Right>
                </CardItem>
              </Card>
              </ScrollView>
          </Tab>
          <Tab heading="Science">
            <ScrollView vertical>
          <Card>
                <CardItem>
                  <Left>
                  <Body>
                      <Text>National Museum of Emerging Science and Innovation (Miraikan) Admission Ticket</Text>
                      <Text note>National Museum of Emerging Science and Innovation (Miraikan) Admission Ticket</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://static.tiket.photos/image/upload/v1569517205/eventThirdParty/2019/09/27/a0d30b83-d0c6-4d95-94d5-723291d24bf9-1569517204956-0d5b1c4c7f720f698946c7f6ab08f687.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}/>
                    <Text>1000000</Text>
                  </Left>
                  <Right>
                    <Icon name="heart"/>
                  </Right>
                </CardItem>
              </Card>
              <Card>
                <CardItem>
                  <Left>
                  <Body>
                      <Text>Science Centre Singapura</Text>
                      <Text note>Science Centre Singapura</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image source={{uri: 'https://static.tiket.photos/image/upload/v1567847954/eventThirdParty/2019/09/07/9032075c-a920-4c99-8d82-c3a96274c234-1567847953170-0d5b1c4c7f720f698946c7f6ab08f687.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Left>
                    <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}/>
                    <Text>1000000</Text>
                  </Left>
                  <Right>
                    <Icon name="heart"/>
                  </Right>
                </CardItem>
              </Card>
              </ScrollView>
          </Tab>
          <Tab heading="Programming">

          </Tab>
        </Tabs>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="pricetags" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="heart" />
              <Text>Favorite</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Profile</Text>
            </Button>
            <Button vertical>
              <Icon name="settings" />
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

// import React, { Component } from 'react';
// import { 
//   Container, 
//   Header, 
//   Title, 
//   Content, 
//   Footer, 
//   FooterTab, 
//   Left, 
//   Right, 
//   Body, 
//   Icon, 
//   Button,
//   Text,
//   Card,
//   CardItem,
//   H3,
//   Tab, 
//   Tabs,
//   ScrollableTab 
// } from 'native-base';
// import { Image, ScrollView } from 'react-native';
// // import { createAppContainer } from 'react-navigation';
// // import { createStackNavigator } from 'react-navigation-stack';
// // import { Button } from 'nachos-ui'

// export default class Home extends Component {
//   render() {
//     return (
//       <Container>
//           <Left>
//             <Button transparent>
//               <Icon name='pricetags' />
//             </Button>
//           </Left>
//           <Body>
//             <Title>KARCIS</Title>
//           </Body>
//           <Right>
//             <Button transparent>
//               <Icon name='search' />
//             </Button>
//             <Button transparent>
//               <Icon name='more' />
//             </Button>
//           </Right>
//         </Header>
//         <Content>
//           <H3>Today</H3>
//           <ScrollView horizontal>
//           <Content style={{width: 300}}>
//               <Card>
//                 <CardItem>
//                   <Left>
//                     <Body>
//                       <Text>UFC 246</Text>
//                       <Text note>GeekyAnts</Text>
//                     </Body>
//                   </Left>
//                 </CardItem>
//                 <CardItem cardBody>
//                   <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-Xn4xVXTYY92i3KNuDKRUijBpGXt3uOhQohTJQcOmjKuzuc0f'}} style={{height: 200, width: null, flex: 1}}/>
//                 </CardItem>
//                 <CardItem>
//                   <Left>
//                     <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}>
//                     </Image>
//                     <Text>1000000</Text>
//                   </Left>
//                   <Right>
//                     <Icon name="heart"/>
//                   </Right>
//                 </CardItem>
//               </Card>
//             </Content>
//             <Content style={{width: 300}}>
//               <Card>
//                 <CardItem>
//                   <Left>
//                     <Body>
//                       <Text>UFC 246</Text>
//                       <Text note>GeekyAnts</Text>
//                     </Body>
//                   </Left>
//                 </CardItem>
//                 <CardItem cardBody>
//                   <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-Xn4xVXTYY92i3KNuDKRUijBpGXt3uOhQohTJQcOmjKuzuc0f'}} style={{height: 200, width: null, flex: 1}}/>
//                 </CardItem>
//                 <CardItem>
//                   <Left>
//                     <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}>
//                     </Image>
//                     <Text>1000000</Text>
//                   </Left>
//                   <Right>
//                     <Icon name="heart"/>
//                   </Right>
//                 </CardItem>
//               </Card>
//             </Content>
//             <Content style={{width: 300}}>
//               <Card>
//                 <CardItem>
//                   <Left>
//                     <Body>
//                       <Text>UFC 246</Text>
//                       <Text note>GeekyAnts</Text>
//                     </Body>
//                   </Left>
//                 </CardItem>
//                 <CardItem cardBody>
//                   <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-Xn4xVXTYY92i3KNuDKRUijBpGXt3uOhQohTJQcOmjKuzuc0f'}} style={{height: 200, width: null, flex: 1}}/>
//                 </CardItem>
//                 <CardItem>
//                   <Left>
//                     <Image source={{uri: 'https://cdn3.iconfinder.com/data/icons/currency-17/24/Idr-512.png'}} style={{height:50, width:50}}>
//                     </Image>
//                     <Text>1000000</Text>
//                   </Left>
//                   <Right>
//                     <Icon name="heart"/>
//                   </Right>
//                 </CardItem>
//               </Card>
//             </Content>
//           </ScrollView>
//         </Content>
//         <Footer>
//           <FooterTab>
//             <Button vertical>
//               <Icon name="pricetags" />
//               <Text>Home</Text>
//             </Button>
//             <Button vertical>
//               <Icon name="heart" />
//               <Text>Favorite</Text>
//             </Button>
//             <Button vertical>
//               <Icon name="person" />
//               <Text>Profile</Text>
//             </Button>
//             <Button vertical>
//               <Icon name="settings" />
//               <Text>Settings</Text>
//             </Button>
//           </FooterTab>
//         </Footer>
//       </Container>
//     );
//   }
// }

// import React from 'react';
// import { View, Text } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

// class HomeScreen extends React.Component {
  //   render() {
    //     return (
      //       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }

// const AppNavigator = createStackNavigator({
  //   Home: {
//     screen: HomeScreen,
//   },
// });

// export default createAppContainer(AppNavigator);
// import React from 'react';
// import { Text, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; // 6.2.2
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home!</Text>
//       </View>
//     );
//   }
// }

// class SettingsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Settings!</Text>
//       </View>
//     );
//   }
// }

// class IconWithBadge extends React.Component {
//   render() {
//     const { name, badgeCount, color, size } = this.props;
//     return (
//       <View style={{ width: 24, height: 24, margin: 5 }}>
//         <Ionicons name={name} size={size} color={color} />
//         {badgeCount > 0 && (
//           <View
//             style={{
//               // /If you're using react-native < 0.57 overflow outside of the parent
//               // will not work on Android, see https://git.io/fhLJ8
//               position: 'absolute',
//               right: -6,
//               top: -3,
//               backgroundColor: 'red',
//               borderRadius: 6,
//               width: 12,
//               height: 12,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
//               {badgeCount}
//             </Text>
//           </View>
//         )}
//       </View>
//     );
//   }
// }

// const HomeIconWithBadge = props => {
//   // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
//   return <IconWithBadge {...props} badgeCount={3} />;
// };

// const getTabBarIcon = (navigation, focused, tintColor) => {
//   const { routeName } = navigation.state;
//   let IconComponent = Ionicons;
//   let iconName;
//   if (routeName === 'Home') {
//     iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//     // We want to add badges to home tab icon
//     IconComponent = HomeIconWithBadge;
//   } else if (routeName === 'Settings') {
//     iconName = `ios-options${focused ? '' : '-outline'}`;
//   }

//   // You can return any component that you like here!
//   return <IconComponent name={iconName} size={25} color={tintColor} />;
// };

// export default createAppContainer(
//   createBottomTabNavigator(
//     {
//       Home: { screen: HomeScreen },
//       Settings: { screen: SettingsScreen },
//     },
//     {
//       defaultNavigationOptions: ({ navigation }) => ({
//         tabBarIcon: ({ focused, tintColor }) =>
//           getTabBarIcon(navigation, focused, tintColor),
//       }),
//       tabBarOptions: {
//         activeTintColor: 'tomato',
//         inactiveTintColor: 'gray',
//       },
//     }
//   )
// );