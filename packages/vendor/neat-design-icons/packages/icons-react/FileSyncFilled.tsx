// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FileSyncFilledSVG from '../icons-svg/lib/FileSyncFilled'
import Icon, { type BaseIconProps } from '../components'

const FileSyncFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FileSyncFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FileSyncFilled.displayName = 'FileSyncFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FileSyncFilled)