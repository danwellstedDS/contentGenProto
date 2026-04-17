// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import FileUpdateOutlinedSVG from '../icons-svg/lib/FileUpdateOutlined'
import Icon, { type BaseIconProps } from '../components'

const FileUpdateOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={FileUpdateOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    FileUpdateOutlined.displayName = 'FileUpdateOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(FileUpdateOutlined)