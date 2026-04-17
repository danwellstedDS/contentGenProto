// GENERATE BY nicon
// DON NOT EDIT IT MANUALLY
import React from 'react'
import DesignSprintOutlinedSVG from '../icons-svg/lib/DesignSprintOutlined'
import Icon, { type BaseIconProps } from '../components'

const DesignSprintOutlined = (
    props: BaseIconProps,
    ref: React.MutableRefObject<HTMLSpanElement>
) => (
    <Icon {...props} isTwoTone={false} ref={ref} component={DesignSprintOutlinedSVG} />
);

if (process.env.NODE_ENV !== 'production') {
    DesignSprintOutlined.displayName = 'DesignSprintOutlined'
}

export default React.forwardRef<HTMLSpanElement, BaseIconProps>(DesignSprintOutlined)