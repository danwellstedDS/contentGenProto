// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import MinusCircleFilledSVG from '../icons-svg/lib/MinusCircleFilled'
import Icon, { type BaseIconProps } from '../components'

const MinusCircleFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={MinusCircleFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    MinusCircleFilled.displayName = 'MinusCircleFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(MinusCircleFilled)