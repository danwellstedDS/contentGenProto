// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TableUpdateOutlinedSVG from '../icons-svg/lib/TableUpdateOutlined'
import Icon, { type BaseIconProps } from '../components'

const TableUpdateOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TableUpdateOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TableUpdateOutlined.displayName = 'TableUpdateOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TableUpdateOutlined)