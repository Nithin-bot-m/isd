import ServiceDetailPage from '../[slug]/page';

export default function DigitalGrowthEngineeringPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: 'digital-growth-engineering' })} />;
}
