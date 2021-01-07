import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

// Components
import DatePicker, { DatePickerProps } from './index';

export default {
  title: 'Quartz/DatePicker',
  component: DatePicker,
} as Meta;

const Template: Story<DatePickerProps> = (props) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      {...props}
      selectProps={{
        value: [new Date(startDate).toISOString()],
        options: [],
        onChange: () => {},
        placeholder: 'to',
        noDataMessage: 'from',
      }}
      selected={startDate}
      onChange={(date) => setStartDate(date as Date)}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  showTimeSelect: true,
  dateFormat: 'MMMM d, yyyy h:mm aa',
  excludeTimes: [new Date()],
};

Default.argTypes = {};
