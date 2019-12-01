import tron from 'reactotron-react-native';
import React from 'react';

import {
  TouchableNativeFeedback,
  View
} from 'react-native';

import {
  Card,
  CardItem,
  Text,
  Grid,
  Col,
  Button,
  Icon,
} from 'native-base';

import { formatarData } from '../../utils/date';

const QuestionCard = (props) => {
  return (
    <View style={{ marginBottom: 3 }}>
      <TouchableNativeFeedback
        onPress={props.onPress}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <Card>
          <CardItem>
            <Grid>
              <Col size={3}>
                <View style={{ width: 70 }}>
                  <View style={{ padding: 5 }}>
                    <Text style={{ textAlign: 'center', fontSize: 12 }}>{props.pergunta.likes || 0}{"\n"}votos</Text>
                  </View>
                  <View style={{ backgroundColor: 'rgba(51, 202, 127, 0.8)', borderRadius: 2, padding: 4, marginTop: 4 }}>
                    <Text style={{ textAlign: 'center', fontSize: 12, color: '#fff' }}>{props.numRespostas || 0}{"\n"}respostas</Text>
                  </View>
                </View>
              </Col>
              <Col size={9}>
                <View style={{ marginLeft: 15 }}>
                  <View>
                    <Text style={{ fontSize: 15 }}>
                      {props.pergunta.titulo}
                    </Text>
                  </View>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 30 }}>

                    <View style={{ flexDirection: 'row' }}>
                      <View style={{ backgroundColor: '#64A6BD', padding: 3, borderRadius: 4, marginRight: 5 }}>
                        <Text style={{ fontSize: 10, color: '#fff' }}>
                          #programação
                        </Text>
                      </View>
                    </View>
                    {/* <View style={{ flexDirection: 'row' }}>
                      {props.question.tags.map((tag, i) =>
                        <View key={i} style={{ backgroundColor: '#64A6BD', padding: 3, borderRadius: 4, marginRight: 5 }}>
                          <Text style={{ fontSize: 10, color: '#fff' }}>
                            #{tag.tag}
                          </Text>
                        </View>
                      )}
                    </View> */}

                    <View style={{}}>
                      <Text style={{ fontSize: 14 }}>
                        {formatarData(props.pergunta.dataPublicacao)}
                      </Text>
                    </View>
                  </View>
                </View>
              </Col>
            </Grid>
          </CardItem>
        </Card>
      </TouchableNativeFeedback>
    </View>
  );
}

export default QuestionCard;