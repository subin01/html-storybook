import {Card } from './Card';
import card from './scripts'
// import {Card, init} from './Card';

export default {
  title: 'Example/Card',
  component: Card,
  // argTypes: {
  //   content: { control: 'text' },
  // },
};

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  className: 'custom-class',
  content: 'Card content section',
  header: 'Card Header',
  footer: "Card footer"
};


Primary.play = ({ canvasElement }) => {
  card.init()
}

