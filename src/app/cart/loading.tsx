export default function Loading() {
    return (
        <div className='fixed inset-0 z-50 grid place-items-center bg-white/80'>
            <div className='border-primary h-12 w-12 animate-spin rounded-full border-t-2' />
        </div>
    );
}
