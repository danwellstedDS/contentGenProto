// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import TableOutlinedSVG from '../icons-svg/lib/TableOutlined'
import Icon, { type BaseIconProps } from '../components'

const TableOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={TableOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    TableOutlined.displayName = 'TableOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(TableOutlined)