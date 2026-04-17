// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FolderOutlinedSVG from '../icons-svg/lib/FolderOutlined'
import Icon, { type BaseIconProps } from '../components'

const FolderOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FolderOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FolderOutlined.displayName = 'FolderOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FolderOutlined)