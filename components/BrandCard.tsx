interface BrandCardProps {
  title: string;
  description: string;
  services: string[];
  iconType: 'creative' | 'studio';
}

export default function BrandCard({
  title,
  description,
  services,
  iconType,
}: BrandCardProps) {
  const isCreative = iconType === 'creative';
  const gradientClass = isCreative
    ? 'from-primary-400 to-primary-600'
    : 'from-cyan-400 to-cyan-600';
  const tagColorClass = isCreative
    ? 'bg-primary-50 text-primary-700'
    : 'bg-cyan-50 text-cyan-700';

  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Icon Container */}
      <div className={`w-16 h-16 bg-gradient-to-br ${gradientClass} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        {isCreative ? (
          // Creative Icon (Monitor)
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ) : (
          // Studio Icon (T-shirt/Design)
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        )}
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Services Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {services.map((service) => (
          <span key={service} className={`px-3 py-1 ${tagColorClass} text-sm font-medium rounded-full`}>
            {service}
          </span>
        ))}
      </div>

      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg">
        <span className="flex h-2 w-2 rounded-full bg-gray-400" />
        Coming Soon
      </div>
    </div>
  );
}
