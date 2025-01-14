import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function MarketplacePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">Our Collections</h1>
        <p className="mt-2 text-muted-foreground">
          Discover our curated selection of premium accessories for men and women. From elegant watches to designer bags, find pieces that define your style.
        </p>
        <p className="mt-2 text-muted-foreground italic text-sm">
          *Special discounts available for bulk purchases.
        </p>
        
        <div className="mt-8 lg:grid lg:grid-cols-4 lg:gap-x-8">
          <ProductFilters />
          <ProductGrid />
        </div>
      </div>
    </div>
  )
}