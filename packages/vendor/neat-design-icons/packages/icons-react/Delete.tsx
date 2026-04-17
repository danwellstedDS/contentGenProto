// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import DeleteSVG from '../icons-svg/lib/Delete'
import Icon, { type BaseIconProps } from '../components'

const Delete = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={DeleteSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    Delete.displayName = 'Delete'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(Delete)