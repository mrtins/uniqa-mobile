import tron from 'reactotron-react-native';
import React, { useState } from 'react';

import { View } from 'react-native';

import {
  Item,
  Input,
  Card,
  CardItem,
  Body,
  Text,
  Grid,
  Col,
  Button,
  Icon,
  Fab
} from 'native-base';

import AppContainer from '../../components/AppContainer';

const Home = (props) => {
  const [fabActive, setFabActive] = useState(false);

  return (
    <>
      <AppContainer navigation={props.navigation} headerTitle="Uni Q&A">
        <View style={{ display: 'flex' }}>
          <View style={{ marginTop: 15, marginBottom: 10, paddingLeft: 20, paddingRight: 20, }}>
            <Item rounded style={{ backgroundColor: '#fff', height: 40 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                <Icon name='search' type="MaterialIcons" />
                <Input placeholder='Pesquisar' style={{ marginTop: 5 }} />
              </View>
            </Item>
          </View>
        </View>

        <View style={{ marginBottom: 3 }}>
          <Card>
            <CardItem>
              <Grid>
                <Col size={2}>
                  <Button style={{ borderRadius: 50, padding: 0, width: 40, height: 40, backgroundColor: 'green' }}>
                    <Icon name='plus' type="MaterialCommunityIcons" style={{ fontSize: 12, textAlign: 'center' }} />
                  </Button>
                  <Button style={{ marginTop: 10, borderRadius: 50, padding: 0, width: 40, height: 40, backgroundColor: 'red' }}>
                    <Icon name='minus' type="MaterialCommunityIcons" style={{ fontSize: 12, textAlign: 'center' }} />
                  </Button>
                </Col>
                <Col size={10}>
                  <View style={{ marginLeft: 15 }}>
                    <View>
                      <Text>
                        Pergunta pergunta?
                      </Text>
                      <Text style={{ fontSize: 12, fontWeight: '200', marginTop: 5 }}>
                        Descrição descrição
                      </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 }}>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ backgroundColor: 'gray', padding: 5, borderRadius: 100, marginRight: 5 }}>
                          <Text style={{ fontSize: 10, color: '#fff' }}>
                            #tag
                        </Text>
                        </View>
                        <View style={{ backgroundColor: 'gray', padding: 5, borderRadius: 100, marginRight: 5 }}>
                          <Text style={{ fontSize: 10, color: '#fff' }}>
                            #tag
                        </Text>
                        </View>
                      </View>
                      <View>
                        <Text style={{ fontSize: 14 }}>
                          17 Out
                        </Text>
                      </View>
                    </View>
                  </View>
                </Col>
              </Grid>
            </CardItem>
          </Card>
        </View>

        <View>
          <Card>
            <CardItem>
              <Grid>
                <Col size={2}>
                  <Button style={{ borderRadius: 50, padding: 0, width: 40, height: 40, backgroundColor: 'green' }}>
                    <Icon name='plus' type="MaterialCommunityIcons" style={{ fontSize: 12, textAlign: 'center' }} />
                  </Button>
                  <Button style={{ marginTop: 10, borderRadius: 50, padding: 0, width: 40, height: 40, backgroundColor: 'red' }}>
                    <Icon name='minus' type="MaterialCommunityIcons" style={{ fontSize: 12, textAlign: 'center' }} />
                  </Button>
                </Col>
                <Col size={10}>
                  <View style={{ marginLeft: 15 }}>
                    <View>
                      <Text>
                        Pergunta pergunta?
                      </Text>
                      <Text style={{ fontSize: 12, fontWeight: '200', marginTop: 5 }}>
                        Descrição descrição
                      </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 }}>
                      <View style={{ flexDirection: 'row' }}>
                        <View style={{ backgroundColor: 'gray', padding: 5, borderRadius: 100, marginRight: 5 }}>
                          <Text style={{ fontSize: 10, color: '#fff' }}>
                            #tag
                        </Text>
                        </View>
                        <View style={{ backgroundColor: 'gray', padding: 5, borderRadius: 100, marginRight: 5 }}>
                          <Text style={{ fontSize: 10, color: '#fff' }}>
                            #tag
                        </Text>
                        </View>
                      </View>
                      <View>
                        <Text style={{ fontSize: 14 }}>
                          17 Out
                        </Text>
                      </View>
                    </View>
                  </View>
                </Col>
              </Grid>
            </CardItem>
          </Card>
        </View>

        <Fab
          active={fabActive}
          direction="up"
          containerStyle={{}}
          // style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => setFabActive(!fabActive)}>
          <Icon name="md-add" />
          {/* <Button style={{ backgroundColor: '#DD5144' }} onPress={() => tron.log('press fab')}>
            <Icon name="money-bill" type="FontAwesome5" />
          </Button> */}
        </Fab>
      </AppContainer>
    </>
  );
}

export default Home;