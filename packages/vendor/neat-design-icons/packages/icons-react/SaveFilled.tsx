// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import SaveFilledSVG from '../icons-svg/lib/SaveFilled'
import Icon, { type BaseIconProps } from '../components'

const SaveFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={SaveFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    SaveFilled.displayName = 'SaveFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(SaveFilled)