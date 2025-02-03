export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-19'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "sksAwerY9abC8mXPeMzKu38QyVyHhYhdz44iJD4wtALNprmP7fqUhG0AVxqxp88GnpiguITfDXCxG6Aj04Ok730YZHJM2hKnEHjKQXj5zH7ZJiJCn14gMLGJNsoXuKH5FFm9ifzOUPG5r66Ma3zqOfazDxjAzs3YNTKyrqBew7k2pvXlILB4",
   'Missing environment variable: SANITY_API__TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
