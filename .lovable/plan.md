

## Plan: Clean up disciplines — remove AI images, fix duplicates, add new photos

### Issues identified

1. **Reception & Lounge** (line 119): uses `receptionWaiting`, `receptionImg`, `facilityInterior` — `receptionImg` and `facilityInterior` are AI-generated. Keep only `receptionWaiting` (real photo).

2. **Recovery Rooms** (line 123-127): uses `recoveryRoom` which is AI-generated. This category is redundant since recovery rooms belong to "The Stay." Remove this entire discipline entry.

3. **Healthy Café** (line 129-132): uses `discipline-cafe.jpg` (AI-generated). Replace with the uploaded `cafe-2.jpg`.

4. **Clinical Team** (line 135-138): uses `discipline-team.jpg`. Add the new uploaded `medical-staff-team-2.jpg` as a second image.

5. **Aesthetic & Hair Studio** (line 99-102): uses `aestheticImg` and `salonBeauty` which appear to be duplicates. Replace with the uploaded `3-2.jpg` (salon/barber chair photo) as the primary, keep one of the originals if distinct.

### Changes

**Asset copies (3 new files):**
- `user-uploads://cafe-2.jpg` → `src/assets/cafe-2.jpg`
- `user-uploads://medical-staff-team-2.jpg` → `src/assets/medical-staff-team-2.jpg`
- `user-uploads://3-2.jpg` → `src/assets/salon-studio.jpg`

**`src/components/ServicesSection.tsx`:**
- Import `cafe2` from new cafe asset; replace `cafeImg` in Healthy Café images array
- Import `teamImg2` from new team asset; add to Clinical Team images array
- Import `salonStudio` from new salon asset; replace `aestheticImg` in Aesthetic & Hair Studio (keep `salonBeauty` if it's distinct from `salonStudio`, otherwise replace both)
- Remove `facilityInterior` and `receptionImg` from Reception & Lounge — keep only `receptionWaiting`
- Remove the entire "Recovery Rooms" discipline entry
- Remove unused imports (`recoveryRoom`, `facilityInterior`, `receptionImg`, `aestheticImg`, `cafeImg`)

