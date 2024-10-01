import React from 'react'
import ContentLoader from 'react-content-loader'

function FeedbackShimmer() {
  return (
    <div className="shimmer-card bg-white rounded-3">
      <ContentLoader
        speed={2}
        width={300}
        height={200}
        backgroundColor="#f3f3f3"
        foregroundColor="#bdbdbd"
      >
        <rect x="10" y="10" rx="8" ry="8" width="150" height="100" />
        <rect x="10" y="120" rx="4" ry="4" width="160" height="16" />
        <rect x="10" y="140" rx="4" ry="4" width="50" height="12" />
        <rect x="10" y="160" rx="4" ry="4" width="120" height="12" />
      </ContentLoader>
    </div>
  )
}

export default FeedbackShimmer
