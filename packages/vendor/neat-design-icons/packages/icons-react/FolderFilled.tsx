// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FolderFilledSVG from '../icons-svg/lib/FolderFilled'
import Icon, { type BaseIconProps } from '../components'

const FolderFilled = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FolderFilledSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FolderFilled.displayName = 'FolderFilled'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FolderFilled)