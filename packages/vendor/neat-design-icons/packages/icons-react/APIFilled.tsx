// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import APIFilledSVG from '../icons-svg/lib/APIFilled'
import Icon, { type BaseIconProps } from '../components'

const APIFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={APIFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    APIFilled.displayName = 'APIFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(APIFilled)