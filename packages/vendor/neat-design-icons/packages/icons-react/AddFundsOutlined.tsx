// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import AddFundsOutlinedSVG from '../icons-svg/lib/AddFundsOutlined'
import Icon, { type BaseIconProps } from '../components'

const AddFundsOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={AddFundsOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    AddFundsOutlined.displayName = 'AddFundsOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(AddFundsOutlined)