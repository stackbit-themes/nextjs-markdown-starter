import { Hero } from '../components/Hero.jsx';
import { Stats } from '../components/Stats.jsx';
import { getPageFromSlug, getPagePaths } from '../utils/content.js';

export async function getStaticPaths() {
    const paths = await getPagePaths();
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const slug = '/' + (params?.slug ?? ['']).join('/');
    const page = await getPageFromSlug(slug);
    return { props: { page } };
}

const componentMap = {
    hero: Hero,
    stats: Stats
};

export default function ComposablePage({ page }) {
    return (
        <div data-sb-object-id={page._id}>
            {page.sections?.length ? (
                page.sections.map((section, idx) => {
                    const Component = componentMap[section.type];
                    return (
                        <div data-sb-field-path={`sections.${idx}`} key={idx}>
                            <Component {...section} />
                        </div>
                    );
                })
            ) : (
                <EmptyState />
            )}
        </div>
    );
}

function EmptyState() {
    return process.env.NODE_ENV === 'development' ? (
        <div className="flex items-center justify-center w-full py-32">
            <div className="border-4 border-gray-400 rounded p-16 border-dashed flex flex-col gap-2 items-center">
                <span className="text-2xl">Empty page! add sections.</span>
                <span>(this message does not appear in production)</span>
            </div>
        </div>
    ) : (
        <></>
    );
}
