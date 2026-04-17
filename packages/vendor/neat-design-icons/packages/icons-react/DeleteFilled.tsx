// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import DeleteFilledSVG from '../icons-svg/lib/DeleteFilled'
import Icon, { type BaseIconProps } from '../components'

const DeleteFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={DeleteFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    DeleteFilled.displayName = 'DeleteFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(DeleteFilled)