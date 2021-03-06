import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import RegistrationForm from '../src/components/RegistrationForm';
import LoginForm from '../src/components/LoginForm';
import PetItem from '../src/components/PetItem';
import PetView from '../src/components/Pet';
import TopNav from '../src/components/TopNav';
import ShoppingCart from '../src/components/ShoppingCart';
import OrderItem from '../src/components/OrderItem';

import '../src/App.css';

storiesOf('RegisterForm', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('default', () => (
        <RegistrationForm onSubmit={action('register')} />
    ));


storiesOf("LoginForm", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('default', () => (
        <LoginForm onSubmit={action('login')} />
    ));

storiesOf("PetItem", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('default', () => (
        <PetItem pet={{
          "_links": {
            "pet": {
              "href": "http://localhost:8080/pets/4"
            },
            "self": {
              "href": "http://localhost:8080/pets/4"
            }
          },
          "description": "吉娃娃属小型犬种里最小的 ,优雅，警惕，动作迅速，以匀称的体格和娇小的体型广受人们的喜爱。吉娃娃犬不仅是可爱的小型玩具犬，同时也具备大型犬的狩猎与防范本能，具有类似梗类犬的气质。此犬分为长毛种和短毛种。这种狗体型娇小,对其它狗不胆怯,对主人极有独占心。短毛种和长毛种不同之处在于富有光泽,贴身,柔顺的短被毛。长毛种的吉娃娃除了背毛丰厚外,像短毛种一样具有发抖的倾向,不要认为是感冒。 整体外观：这种犬身体紧凑。很重要的一点是其头骨为苹果形，尾巴长度适当且高高举起，不卷曲也不成半圆形，尾尖指向腰部。 重要比例：体长各大于从地面到马肩隆的高度。体形最好几近方形，雄性更是如此。雌性由于其生育特点，其体长可以更长一些。",
          "id": 4,
          "pictureUrl": "https://gd4.alicdn.com/imgextra/i4/2867678467/TB2FyJqg80kpuFjSsziXXa.oVXa_!!2867678467.jpg_400x400.jpg",
          "name": "吉娃娃",
          "price": "CNY 4000.00",
          "quantity": 30
        }} />
    ));

storiesOf("PetView", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('default', () => (
        <PetView addToCard={action('add to cart')} pet={{
          "_links": {
            "pet": {
              "href": "http://localhost:8080/pets/4"
            },
            "self": {
              "href": "http://localhost:8080/pets/4"
            }
          },
          "description": "吉娃娃属小型犬种里最小的 ,优雅，警惕，动作迅速，以匀称的体格和娇小的体型广受人们的喜爱。吉娃娃犬不仅是可爱的小型玩具犬，同时也具备大型犬的狩猎与防范本能，具有类似梗类犬的气质。此犬分为长毛种和短毛种。这种狗体型娇小,对其它狗不胆怯,对主人极有独占心。短毛种和长毛种不同之处在于富有光泽,贴身,柔顺的短被毛。长毛种的吉娃娃除了背毛丰厚外,像短毛种一样具有发抖的倾向,不要认为是感冒。 整体外观：这种犬身体紧凑。很重要的一点是其头骨为苹果形，尾巴长度适当且高高举起，不卷曲也不成半圆形，尾尖指向腰部。 重要比例：体长各大于从地面到马肩隆的高度。体形最好几近方形，雄性更是如此。雌性由于其生育特点，其体长可以更长一些。",
          "id": 4,
          "name": "吉娃娃",
          "price": "CNY 4000.00",
          "quantity": 30
        }} />
    ));

storiesOf("Top Navi Bar", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('with login user', () => (
        <TopNav user={{username: 'aisensiy'}} itemCount={10} logout={action('logout')}/>
    ))
    .add('without login', () => (
        <TopNav logout={action('logout')} itemCount={0} />
    ));

storiesOf("Shopping Cart", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('empty shopping cart', () => (
        <ShoppingCart items={[]} createOrder={action('create order')}/>
    ))
    .add('with multi items', () => (
        <ShoppingCart updateQuantity={action('update quantity')}
                      createOrder={action('create order')}
                      removeItem={action('remove item fron cart')} items={[
          {
            pet: {
              "_links": {
                "pet": {
                  "href": "http://localhost:8080/pets/4"
                },
                "self": {
                  "href": "http://localhost:8080/pets/4"
                }
              },
              "description": "吉娃娃属小型犬种里最小的 ,优雅，警惕，动作迅速，以匀称的体格和娇小的体型广受人们的喜爱。吉娃娃犬不仅是可爱的小型玩具犬，同时也具备大型犬的狩猎与防范本能，具有类似梗类犬的气质。此犬分为长毛种和短毛种。这种狗体型娇小,对其它狗不胆怯,对主人极有独占心。短毛种和长毛种不同之处在于富有光泽,贴身,柔顺的短被毛。长毛种的吉娃娃除了背毛丰厚外,像短毛种一样具有发抖的倾向,不要认为是感冒。 整体外观：这种犬身体紧凑。很重要的一点是其头骨为苹果形，尾巴长度适当且高高举起，不卷曲也不成半圆形，尾尖指向腰部。 重要比例：体长各大于从地面到马肩隆的高度。体形最好几近方形，雄性更是如此。雌性由于其生育特点，其体长可以更长一些。",
              "id": 4,
              "name": "吉娃娃",
              "price": "CNY 4000.00",
              "quantity": 30
            },
            quantity: 1
          },
          {
            pet: {
              "_links": {
                "pet": {
                  "href": "http://localhost:8080/pets/1"
                },
                "self": {
                  "href": "http://localhost:8080/pets/1"
                }
              },
              "description": "原产美国的一种猫，其祖先为欧洲早期移民带到北美的猫种，与英国短毛猫和欧洲短毛猫同类。据记载，五月花号上携带了数只猫以帮助除鼠。该品种的猫是在街头巷尾收集来的猫当中选种、并和进口品种如英国短毛猫、缅甸猫和波斯猫杂交培育而成。美国短毛猫在欧洲很罕见，但在日本颇受好评，在美国国内也较受欢迎。",
              "id": 1,
              "name": "美国短毛猫",
              "price": "CNY 4000.00",
              "quantity": 10
            },
            quantity: 3
          }
        ]}/>
    ));

storiesOf("Order Item", module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('default', () => (
        <OrderItem order={{
          "id": "ba649c3c-94a2-4ea1-a151-794f781b36ed",
          "orderedDate": "2017-06-07T16:46:14.457+08:00",
          "status": "PAYMENT_EXPECTED",
          "username": "aisensiy",
          "paid": false,
          "delivering": false,
          "finished": false,
          "items": [
            {
              "petId": 1,
              "quantity": 1,
              "price": "CNY 4000.00",
              "name": "美国短尾猫"
            },
            {
              "petId": 2,
              "quantity": 1,
              "price": "CNY 4000.00",
              "name": "英国短尾猫"
            }
          ],
          "price": "CNY 8000.00"
        }}/>
    ));
