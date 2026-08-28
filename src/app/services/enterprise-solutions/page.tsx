import ServiceDetailPage from '../[slug]/page';

export default function EnterpriseSolutionsPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: 'enterprise-solutions' })} />;
}
