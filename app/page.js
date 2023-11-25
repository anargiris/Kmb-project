"use client";
import ArticlesList from "@/components/ArticlesList";
import Image from "next/image";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import ArticlesFilters from "@/components/ArticlesFilters";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Home() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  //This is setting up the page and sortBy values from the URL query parameters on page load
  useEffect(() => {
    if (searchParams.get("page")) {
      setPage(Number(searchParams.get("page")));
    }
    if (searchParams.get("sortBy")) {
      setSortBy(searchParams.get("sortBy"));
    }
  }, []);

  //everytime the page or sortBy changes, I update the current url of the page (so we can share with other people)
  useEffect(() => {
    const query = `?page=${page}&sortBy=${sortBy}`;
    router.push(`${pathname}${query}`, undefined, {
      shallow: true,
    });
  }, [page, sortBy]);

  const { data, isLoading, error } = useSWR(
    `http://newsapi.org/v2/everything?q=${
      search !== "" ? search : "a"
    }&apiKey=09b2a48dc89f416caada3626ec05f9eb&page=${page}&pageSize=6&searchIn=title&sortBy=${sortBy}`
  );

  if (error) return <div>There was an error!</div>;

  const totalPages = Math.min(data?.totalResults / 6).toFixed(0);

  return (
    <main className="min-h-screen p-10 md:p-24 ">
      <ArticlesFilters
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {data.articles && data.articles.length > 0 ? (
            <>
              <ArticlesList articles={data.articles} />{" "}
              <Pagination
                isLoading={isLoading}
                totalPages={totalPages}
                page={page}
                setPage={setPage}
              />
            </>
          ) : (
            <div>There are no articles!</div>
          )}
        </>
      )}
    </main>
  );
}
